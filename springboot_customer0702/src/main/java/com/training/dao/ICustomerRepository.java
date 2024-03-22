package com.training.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.training.model.Customer;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Long> {

}

