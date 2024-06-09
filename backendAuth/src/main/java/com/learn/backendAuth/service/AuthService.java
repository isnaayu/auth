package com.learn.backendAuth.service;

import com.learn.backendAuth.dto.request.AuthRequest;
import com.learn.backendAuth.dto.response.LoginResponse;
import com.learn.backendAuth.dto.response.RegisterResponse;

public interface AuthService {
    RegisterResponse registerCustomer(AuthRequest authRequest);

    LoginResponse login(AuthRequest authRequest);

    RegisterResponse registerAdmin(AuthRequest authRequest);
}
