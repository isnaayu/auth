package com.learn.backendAuth.service.impl;

import com.learn.backendAuth.dto.request.CustomerRequest;
import com.learn.backendAuth.dto.response.CustomerResponse;
import com.learn.backendAuth.entity.Customer;
import com.learn.backendAuth.repository.CustomerRepository;
import com.learn.backendAuth.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;

    @Override
    public CustomerResponse create(CustomerRequest customerRequest) {
        Customer customer = Customer.builder()
                .name(customerRequest.getName())
                .address(customerRequest.getAddress())
                .email(customerRequest.getEmail())
                .mobilePhone(customerRequest.getMobilePhone())
                .build();
        customerRepository.save(customer);
        return CustomerResponse.builder()
                .id(customer.getId())
                .CustomerName(customer.getName())
                .CustomerAddress(customer.getAddress())
                .email(customer.getEmail())
                .Phone(customer.getMobilePhone())
                .build();
    }

    @Override
    public List<CustomerResponse> getAll() {
        return customerRepository.findAll().stream().map((user ->{
            CustomerResponse customerResponse = new CustomerResponse();
            customerResponse.setId(user.getId());
            customerResponse.setCustomerName(user.getName());
            customerResponse.setCustomerAddress(user.getAddress());
            customerResponse.setEmail(user.getEmail());
            customerResponse.setPhone(user.getMobilePhone());
            return customerResponse;
        })).collect(Collectors.toList());
    }

    @Override
    public CustomerResponse getById(String id) {
        return customerRepository.findById(id).map((user ->{
            CustomerResponse customerResponse = new CustomerResponse();
            customerResponse.setId(user.getId());
            customerResponse.setCustomerName(user.getName());
            customerResponse.setCustomerAddress(user.getAddress());
            customerResponse.setEmail(user.getEmail());
            customerResponse.setPhone(user.getMobilePhone());
            return customerResponse;
        })).orElse(null);
    }

    @Override
    public void delete(String id) {
        if (getById(id) != null){
            customerRepository.deleteById(id);
            System.out.println("Delete Succesfully");
        }else {
            System.out.printf("Delete Failed!");
        }
    }

    @Override
    public CustomerResponse update(CustomerRequest customerRequest) {
        CustomerResponse currentCustomer = getById(customerRequest.getId());
        if (currentCustomer != null){
            Customer customer = Customer.builder()
                    .id(customerRequest.getId())
                    .name(customerRequest.getName())
                    .address(customerRequest.getAddress())
                    .email(customerRequest.getEmail())
                    .mobilePhone(customerRequest.getMobilePhone())
                    .build();
            customerRepository.save(customer);
            return CustomerResponse.builder()
                    .id(customer.getId())
                    .CustomerName(customer.getName())
                    .CustomerAddress(customer.getAddress())
                    .email(customer.getEmail())
                    .Phone(customer.getMobilePhone())
                    .build();
        }
        return null;
    }

    @Override
    public CustomerResponse createNewCustomer(Customer request) {
        Customer customer = customerRepository.saveAndFlush(request);
        return CustomerResponse.builder()
                .id(customer.getId())
                .CustomerName(customer.getName())
                .Phone(customer.getMobilePhone())
                .email(customer.getEmail())
                .CustomerAddress(customer.getAddress())
                .build();
    }
}
