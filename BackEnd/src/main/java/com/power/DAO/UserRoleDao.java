package com.power.DAO;

import java.util.List;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

public interface UserRoleDao {

	public List<SimpleGrantedAuthority> getRoles(String userName);
	
}
