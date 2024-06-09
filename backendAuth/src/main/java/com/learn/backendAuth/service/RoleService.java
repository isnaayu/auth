package com.learn.backendAuth.service;

import com.learn.backendAuth.entity.Role;

public interface RoleService {
    Role getOrSave(Role role);
}
