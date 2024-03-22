package com.training.service;

import java.util.List;

import com.training.dto.CustomerData;
import com.training.model.Customer;

public interface IService<T> {

	List<CustomerData> findAll();
	T findById(final Long id);
	T create(T t);
	boolean delete(final Long id);
	
	
}
