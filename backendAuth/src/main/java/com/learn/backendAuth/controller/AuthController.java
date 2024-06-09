package com.learn.backendAuth.controller;

import com.learn.backendAuth.constant.AppPath;
import com.learn.backendAuth.dto.request.AuthRequest;
import com.learn.backendAuth.dto.response.CommonResponse;
import com.learn.backendAuth.dto.response.LoginResponse;
import com.learn.backendAuth.dto.response.RegisterResponse;
import com.learn.backendAuth.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequiredArgsConstructor
@RequestMapping(AppPath.AUTH)
public class AuthController {
    private final AuthService authService;
    @PostMapping("/register")
    public RegisterResponse create(@RequestBody AuthRequest authRequest){
        return authService.registerCustomer(authRequest);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest){
        LoginResponse loginResponse = authService.login(authRequest);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(CommonResponse.builder()
                        .data(loginResponse)
                        .message("Succesfully Login")
                        .statusCode(HttpStatus.CREATED.value())
                        .build());
    }
}
