package com.none.cpzs.controller;

import com.none.cpzs.annotation.FileLog;
import com.none.cpzs.common.CodeConstant;
import com.none.cpzs.common.Constants;
import com.none.cpzs.dao1.UserInfoMapper;
import com.none.cpzs.po.UserInfo;
import com.none.cpzs.service.SelectConditionService;
import com.none.cpzs.service.UmsAdminService;
import com.none.cpzs.utils.SessionUtil;
import com.none.cpzs.vo.LoginResponse;
import com.none.cpzs.vo.SelectCondition;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.xml.ws.Response;

/**
 * Created by admin on 2019/11/21.
 */
@Controller
@RequestMapping("/")
@Api(tags="登陆登出")
public class LoginController {
    @Autowired
    private UmsAdminService umsAdminService;
    @Autowired
    private SelectConditionService selectConditionService;
    @RequestMapping("doLogin")
    @ApiOperation(value="登陆")
    @ResponseBody
    @FileLog
    public LoginResponse login(@RequestBody UserInfo userInfo){
        LoginResponse loginResponse= umsAdminService.login(userInfo.getUserName(),userInfo.getPassword());
        if(CodeConstant.SUCCESS.equals(loginResponse.getReturnCode())){
            SessionUtil.getSession().setAttribute(Constants.SESSION_USER, loginResponse.getUserInfo());
            selectConditionService.refreshCache();
            loginResponse.setUserInfo(null);
        }
        return loginResponse;
    }

    @RequestMapping("/ll")
    public ModelAndView toLogin(){
        ModelAndView mv=new ModelAndView();
        System.out.println("123111111111111111");
        mv.setViewName("login");
        return mv;
    }
}
