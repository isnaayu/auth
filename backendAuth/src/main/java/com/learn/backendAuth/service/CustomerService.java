package com.learn.backendAuth.service;

import com.learn.backendAuth.dto.request.CustomerRequest;
import com.learn.backendAuth.dto.response.CustomerResponse;
import com.learn.backendAuth.entity.Customer;
import org.springframework.stereotype.Service;

import java.util.List;

public interface CustomerService {
    CustomerResponse create(CustomerRequest customerRequest);
    CustomerResponse createNewCustomer(Customer request);
    List<CustomerResponse> getAll();
    CustomerResponse getById(String id);
    void delete(String id);
    CustomerResponse update(CustomerRequest customerRequest);

}
