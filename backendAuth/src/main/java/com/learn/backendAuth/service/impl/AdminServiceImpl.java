package com.learn.backendAuth.service.impl;

import com.learn.backendAuth.dto.response.AdminResponse;
import com.learn.backendAuth.entity.Admin;
import com.learn.backendAuth.repository.AdminRepository;
import com.learn.backendAuth.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {
    private final AdminRepository adminRepository;

    @Override
    public AdminResponse createNewAdmin(Admin request) {
        Admin admin = adminRepository.saveAndFlush(request);
        return AdminResponse.builder()
                .id(admin.getId())
                .adminName(admin.getName())
                .Phone(admin.getPhoneNumber())
                .build();
    }
}
