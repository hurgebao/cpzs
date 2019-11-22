package com.none.cpzs.service;

import com.none.cpzs.vo.UmsAdmin;
import com.none.cpzs.vo.UmsPermission;

import java.util.List;
import java.util.Map;



public class CommonResult<T> {

	public static Object forbidden(String message) {
		return null;
	}

	public static Object unauthorized(String message) {
		return null;
	}

	public static CommonResult<UmsAdmin> success(UmsAdmin umsAdmin) {
		return null;
	}

	public static void failed() {
		
	}

	public static CommonResult validateFailed(String returnMsg) {
		return null;
	}

	public static CommonResult success(Map<String, String> tokenMap) {
		return null;
	}

	public static CommonResult<List<UmsPermission>> success(List<UmsPermission> permissionList) {
		return null;
	}

}
