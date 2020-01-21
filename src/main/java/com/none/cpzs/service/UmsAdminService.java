package com.none.cpzs.service;

import com.none.cpzs.vo.LoginResponse;
import com.none.cpzs.vo.UmsAdmin;
import com.none.cpzs.vo.UmsPermission;

import java.util.List;



public interface UmsAdminService {

	UmsAdmin getAdminByUsername(String username);

	List<UmsPermission> getPermissionList(Object id);

	UmsAdmin register(UmsAdmin umsAdminParam);

	LoginResponse login(String username, String password);

}
