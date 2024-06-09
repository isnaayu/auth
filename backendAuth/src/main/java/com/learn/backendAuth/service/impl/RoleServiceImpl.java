package com.learn.backendAuth.service.impl;

import com.learn.backendAuth.entity.Role;
import com.learn.backendAuth.repository.RoleRepository;
import com.learn.backendAuth.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {
    private final RoleRepository roleRepository;
    @Override
    public Role getOrSave(Role role) {
        Optional<Role> optionalRole = roleRepository.findByName(role.getName());
        if (!optionalRole.isEmpty()) return optionalRole.get();

        return roleRepository.save(role);
    }
}
