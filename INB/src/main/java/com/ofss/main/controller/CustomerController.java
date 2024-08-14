package com.ofss.main.controller;

import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ofss.main.domain.Customer;
import com.ofss.main.service.CustomerService;

@CrossOrigin("*")
@RequestMapping("customercrudapi")
@RestController
public class CustomerController {
	@Autowired
	private CustomerService customerService;
	// http://localhost:8080/customercrudapi/customer/1

	@GetMapping("customer/{customerId}")
	public Customer getCustomerFromDB(@PathVariable int customerId) {
		return customerService.getCustomerByCustomerId(customerId);
	}

	@PostMapping("customer")
	public Customer addNewCustomerToDB(@RequestBody Customer customer) {
		return customerService.addNewCustomer(customer);
	}

	@PutMapping("customer")
	public Customer updateCustomerToDB(@RequestBody Customer customer) {
		return customerService.updateCustomer(customer);
	}

	@DeleteMapping("customer/{customerId}")
	public boolean deleteCustomerToDB(@PathVariable int customerId) {
		return customerService.deleteCustomer(customerId);
	}

	@GetMapping("customer")
	public List<Customer> getAllCustomerFromDB() {
		return customerService.getAllCustomer();
	}
	
	@PostMapping("customerAuthentication")
	public boolean authentication(@RequestBody String loginDetails) {
		JSONObject jsonObject = new JSONObject(loginDetails);
		String username = jsonObject.getString("username");
		String password = jsonObject.getString("password");
		
		return customerService.authenticate(username, password);
//		System.out.println(loginDetails);
//		return true;
	}
}
