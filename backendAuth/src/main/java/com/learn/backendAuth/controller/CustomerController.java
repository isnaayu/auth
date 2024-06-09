package com.learn.backendAuth.controller;

import com.learn.backendAuth.constant.AppPath;
import com.learn.backendAuth.dto.request.CustomerRequest;
import com.learn.backendAuth.dto.response.CustomerResponse;
import com.learn.backendAuth.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequiredArgsConstructor
@RequestMapping(AppPath.CUSTOMER)
public class CustomerController {
    public final CustomerService customerService;

    @PostMapping
    public CustomerResponse create(@RequestBody CustomerRequest customerRequest){
        return customerService.create(customerRequest);
    }

    @GetMapping
    public List<CustomerResponse> getAll(){
        return customerService.getAll();
    }

    @GetMapping("/{id}")
    public CustomerResponse getById(@PathVariable String id){
        return customerService.getById(id);
    }

    @PutMapping
    public CustomerResponse update(@RequestBody CustomerRequest customerRequest){
        return customerService.update(customerRequest);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id){
        customerService.delete(id);
    }

}
