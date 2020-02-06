package com.none.cpzs.utils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.none.cpzs.common.Constants;
import com.none.cpzs.po.UserInfo;
import com.none.cpzs.vo.SelectCondition;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

public class SessionUtil {
	/**
	 * 获取session对象
	 * 
	 * @return
	 */
	public static HttpSession getSession() {
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes())
				.getRequest();
		return request.getSession();
	}

	/**
	 * 
	 * @return 从session中获取Operator对象，没登录则为�?
	 */
	public static UserInfo getUser() {
		HttpSession session = getSession();
		Object obj = session.getAttribute(Constants.SESSION_USER);
		if (obj instanceof UserInfo) {
			return (UserInfo) obj;
		}
		return null;
	}
	public static SelectCondition getSelect(){
		HttpSession session = getSession();
		Object obj = session.getAttribute(Constants.SELECT_CONDITION);
		if (obj instanceof SelectCondition) {
			return (SelectCondition) obj;
		}
		return null;
	}
	public static void setSelect(SelectCondition s){
		SessionUtil.getSession().setAttribute(Constants.SELECT_CONDITION, s);
	}
}
