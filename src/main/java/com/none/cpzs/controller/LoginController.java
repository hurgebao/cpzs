package com.none.cpzs.controller;

import com.none.cpzs.common.CodeConstant;
import com.none.cpzs.dao1.UserInfoMapper;
import com.none.cpzs.po.UserInfo;
import com.none.cpzs.vo.LoginResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.ws.Response;

/**
 * Created by admin on 2019/11/21.
 */
@RestController


@Api(tags="登陆登出")
public class LoginController {
    @Autowired
    private UserInfoMapper userInfoMapper;
    @PostMapping("login")
    @ApiOperation(value="登陆")
    @ResponseBody
    public LoginResponse login(@RequestBody UserInfo userInfo){
        LoginResponse loginResponse=new LoginResponse();
        loginResponse.setReturnCode(CodeConstant.SUCCESS);
        loginResponse.setReturnMsg("登录成功");
        return loginResponse;
    }
}
