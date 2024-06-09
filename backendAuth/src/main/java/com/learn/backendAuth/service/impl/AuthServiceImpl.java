package com.learn.backendAuth.service.impl;

import com.learn.backendAuth.constant.ERole;
import com.learn.backendAuth.dto.request.AuthRequest;
import com.learn.backendAuth.dto.response.LoginResponse;
import com.learn.backendAuth.dto.response.RegisterResponse;
import com.learn.backendAuth.entity.*;
import com.learn.backendAuth.repository.UserCredentialRepository;
import com.learn.backendAuth.security.JwtUtil;
import com.learn.backendAuth.service.AdminService;
import com.learn.backendAuth.service.AuthService;
import com.learn.backendAuth.service.CustomerService;
import com.learn.backendAuth.service.RoleService;
import com.learn.backendAuth.util.ValidationUtil;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {
    private final UserCredentialRepository userCredentialRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomerService customerService;
    private final AdminService adminService;
    private final RoleService roleService;
    private final JwtUtil jwtUtil;
    private final ValidationUtil validationUtil;
    private final AuthenticationManager authenticationManager;

    @Transactional(rollbackOn = Exception.class)
    @Override
    public RegisterResponse registerCustomer(AuthRequest authRequest) {
        try {
            validationUtil.validate(authRequest);
            Role role = Role.builder()
                    .name(ERole.ROLE_CUSTOMER)
                    .build();
            role = roleService.getOrSave(role);
            UserCredential userCredential = UserCredential.builder()
                    .username(authRequest.getUsername())
                    .password(passwordEncoder.encode(authRequest.getPassword()))
                    .role(role)
                    .build();
            userCredentialRepository.saveAndFlush(userCredential);

            Customer customer = Customer.builder()
                    .userCredential(userCredential)
                    .name(authRequest.getName())
                    .address(authRequest.getAddress())
                    .mobilePhone(authRequest.getMobilePhone())
                    .email(authRequest.getEmail())
                    .build();
            customerService.createNewCustomer(customer);
            log.info("Registered new customer with username '{}'", userCredential.getUsername());
            return RegisterResponse.builder()
                    .username(userCredential.getUsername())
                    .role(userCredential.getRole().getName().toString())
                    .build();
        } catch (DataIntegrityViolationException e) {
            log.error("Failed to register customer: {}", e.getMessage());
            throw new ResponseStatusException(HttpStatus.CONFLICT, "User already exists");
        }
    }

    @Override
    public LoginResponse login(AuthRequest authRequest) {
        validationUtil.validate(authRequest);
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                authRequest.getUsername().toLowerCase(), authRequest.getPassword()
        ));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        AppUser appUser = (AppUser) authentication.getPrincipal();
        String token = jwtUtil.generateToken(appUser);
        log.info("User '{}' logged in successfully", appUser.getUsername());
        return LoginResponse.builder()
                .token(token)
                .role(appUser.getRole().name())
                .build();
    }

    @Override
    public RegisterResponse registerAdmin(AuthRequest authRequest) {
        try {
            validationUtil.validate(authRequest);
            Role role = Role.builder()
                    .name(ERole.ROLE_ADMIN)
                    .build();
            role = roleService.getOrSave(role);
            UserCredential userCredential = UserCredential.builder()
                    .username(authRequest.getUsername())
                    .password(passwordEncoder.encode(authRequest.getPassword()))
                    .role(role)
                    .build();
            userCredentialRepository.saveAndFlush(userCredential);

            Admin admin = Admin.builder()
                    .userCredential(userCredential)
                    .name(authRequest.getName())
                    .phoneNumber(authRequest.getMobilePhone())
                    .build();
            adminService.createNewAdmin(admin);
            log.info("Registered new admin with username '{}'", userCredential.getUsername());
            return RegisterResponse.builder()
                    .username(userCredential.getUsername())
                    .role(userCredential.getRole().getName().toString())
                    .build();
        } catch (DataIntegrityViolationException e) {
            log.error("Failed to register admin: {}", e.getMessage());
            throw new ResponseStatusException(HttpStatus.CONFLICT, "User already exists");
        }
    }
}

