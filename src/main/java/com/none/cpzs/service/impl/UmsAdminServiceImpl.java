package com.none.cpzs.service.impl;

import java.util.List;

import com.none.cpzs.common.CodeConstant;
import com.none.cpzs.dao1.UserInfoMapper;
import com.none.cpzs.po.UserInfo;
import com.none.cpzs.service.UmsAdminService;
import com.none.cpzs.vo.LoginResponse;
import com.none.cpzs.vo.UmsAdmin;
import com.none.cpzs.vo.UmsPermission;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UmsAdminServiceImpl implements UmsAdminService {
	@Autowired
	private UserInfoMapper userInfoMapper;
	@Override
	public UmsAdmin getAdminByUsername(String username) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<UmsPermission> getPermissionList(Object id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UmsAdmin register(UmsAdmin umsAdminParam) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public LoginResponse login(String username, String password) {
		UserInfo userInfo=userInfoMapper.selectByUsername(username);
		LoginResponse loginResponse=new LoginResponse();
		if(userInfo==null || !password.equals(userInfo.getPassword())){
			loginResponse.setReturnCode(CodeConstant.LOGIN_FAIL);
			loginResponse.setReturnMsg("用户名密码错误");
			return loginResponse;
		}
		loginResponse.setUserInfo(userInfo);
		loginResponse.setReturnCode(CodeConstant.SUCCESS);
		loginResponse.setReturnMsg("登录成功");
		return loginResponse;
	}

}
