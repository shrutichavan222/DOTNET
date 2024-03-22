package com.training;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.boot.web.servlet.server.ServletWebServerFactory;
@Configuration
//@SpringBootApplication
@EntityScan(basePackages = {"com.training"})
public class SpringbootCustomer0702Application {

	private static final Logger log = LoggerFactory.getLogger(SpringbootCustomer0702Application.class);

	public static void main(String[] args) {
		SpringApplication.run(SpringbootCustomer0702Application.class, args);
	}

}
