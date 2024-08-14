package com.ofss.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ofss.main.domain.Customer;
import com.ofss.main.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService{
    
	@Autowired
	private CustomerRepository customerRepository;
	@Override
	public Customer getCustomerByCustomerId(int customerId) {
		Optional<Customer> customerOptional = customerRepository.findById(customerId);
		if(customerOptional.isPresent()) {
			return customerOptional.get();
		}
		return null;
	}

	@Override
	public Customer addNewCustomer(Customer customer) {
		return customerRepository.save(customer) ;
	}

	@Override
	public Customer updateCustomer(Customer customer) {
		return customerRepository.save(customer) ;
	}

	@Override
	public boolean deleteCustomer(int customerId) {
		Optional<Customer> customerOptional = customerRepository.findById(customerId);
		if(customerOptional.isPresent()) {
			Customer customer = customerOptional.get();
			customerRepository.delete(customer);
			return true;
		}
		return false;
	}

	@Override
	public List<Customer> getAllCustomer() {
        List<Customer> listOfCustomer = (List<Customer>) customerRepository.findAll();
		
		return listOfCustomer;
	}

	@Override
	public boolean authenticate(String username, String password) {
		Customer customerOptional = customerRepository.findByUsername(username);
		if(customerOptional != null) {
			return true;
		}
		return false;
	}

}
