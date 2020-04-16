package com.power.services;

import org.springframework.http.ResponseEntity;

import com.power.models.User;

public interface AccountService {
	public  ResponseEntity<?> userLogin(User user);
	public ResponseEntity<?> createUserAccount();
}
