package com.learn.backendAuth.service;

import com.learn.backendAuth.dto.response.AdminResponse;
import com.learn.backendAuth.entity.Admin;

public interface AdminService {
    AdminResponse createNewAdmin(Admin request);
}
