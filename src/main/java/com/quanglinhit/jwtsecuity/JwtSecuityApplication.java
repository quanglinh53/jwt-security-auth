package com.quanglinhit.jwtsecuity;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JwtSecuityApplication {

	public static void main(String[] args) {
		SpringApplication.run(JwtSecuityApplication.class, args);
	}

}

//	method: POST
//	{
//		"userId": 123,
//		"userName": "linhgia",
//		"role": "admin"
//	}
//
//
//	method: all_method
//	Authorization : Token token_generate