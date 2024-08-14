//package com.ofss.main.domain;
//
//
//import java.util.List;
//
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.Table;
//
//@Entity
//@Table(name = "account_details_table")
//public class Account{
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	@Column(name = "account_id")
//	private int account_id ;
////	customer_id int 
////	account_type varchar(10) 
////	minimum_balance int 
////	current_balance int 
////	roi_id int 
////	opening_date date 
////	overdraft_balance int 
////	overdraft_charges int
//	
//	@Column(name = "customer_id")
//    private int customer_id ;
//    private String account_type ;
//    private float minimum_balance ;
//    private float current_balance ;
//    private Customer customer;
//
//    public Account(int account_id, int customer_id, String account_type, float minimum_balance, float current_balance){
//        this.account_id = account_id;
//        this.customer_id = customer_id;
//        this.account_type = account_type;
//        this.minimum_balance = minimum_balance;
//        this.current_balance = current_balance;
//    }
//
//    public String toString(){
//        return ("Account: [ID: "+account_id+"] [Customer ID: "+customer_id+"] [Type: "+ account_type+"] [Minimum Balance: "+minimum_balance+"] [Current Balance: "+current_balance+"]");
//    }
//
//    public int getAccount_id() {
//        return account_id;
//    }
//
//    public void setAccount_id(int account_id) {
//        this.account_id = account_id;
//    }
//
//    public int getCustomer_id() {
//        return customer_id;
//    }
//
//    public void setCustomer_id(int customer_id) {
//        this.customer_id = customer_id;
//    }
//
//    public String getAccount_type() {
//        return account_type;
//    }
//
//    public void setAccount_type(String account_type) {
//        this.account_type = account_type;
//    }
//
//    public float getMinimum_balance() {
//        return minimum_balance;
//    }
//
//    public void setMinimum_balance(float minimum_balance) {
//        this.minimum_balance = minimum_balance;
//    }
//
//    public float getCurrent_balance() {
//        return current_balance;
//    }
//
//    public void setCurrent_balance(float current_balance) {
//        this.current_balance = current_balance;
//    }
//}
