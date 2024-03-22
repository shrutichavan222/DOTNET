//package com.training;
//
//import static org.junit.jupiter.api.Assertions.assertNotNull;
//import static org.junit.jupiter.api.Assertions.assertTrue;
//
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Disabled;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
////import org.springframework.test.context.ContextConfiguration;
//
//import com.training.dto.CustomerData;
//import com.training.service.CustomerService;
////@ContextConfiguration(classes=CustomerServiceTest.class)
//
//@SpringBootTest
//public class CustomerServiceTest {
//	@Autowired
//	private CustomerService customerService;
//	CustomerData customerData;
//
//	@BeforeEach
//	public void beforeEach() {
//
//		customerData = new CustomerData();
////		customerData.setCustomerId(6);
//		customerData.setCustomerName("shruti");
//		customerData.setCustomerAddress("ambivli");
//		customerData.setCustomerEmail("shrutichavan@.com");
//
//	}
//@Disabled
//	@Test
//	public void testFindAllNotNull() {
//		assertNotNull(customerService.findAll());
//	}
//@Disabled
//	@Test
//	public void testCreateNew() {
//		assertNotNull(customerService.create(customerData));
//	}
//@Disabled
//	@Test
//	public void testFindOneNotNull() {
//		Long id = (long) 4;
//		assertNotNull(customerService.findById(id));
//	}
//@Disabled
//	@Test
//	public void testFindOneAndDelete() {
//		Long id =(long) 5;
//		assertTrue(customerService.delete(id));
//	}
//@Disabled
//	@Test
//	public void testFindOneAndUpdate() {
//		Long id =(long) 5;
//		assertNotNull(customerService.updateCustomer(customerData, id));
//	}
//
//}
//
