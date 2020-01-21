package com.none.cpzs.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.none.cpzs.common.Constants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
public class SessionInterceptor extends HandlerInterceptorAdapter {
	private static Logger logger= LoggerFactory.getLogger(SessionInterceptor.class);

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		HttpSession session = request.getSession();
		Object obj = session.getAttribute(Constants.SESSION_USER);
		String contextPath = request.getContextPath();
		String requestType = request.getHeader("X-Requested-With");
		if (obj == null || "".equals(obj)) {
			if (requestType != null && !"".equals(requestType)) {
				response.setHeader("sessionstatus", "timeout");
			} else {
				response.sendRedirect(contextPath + "/login.html");
			}
			return false;
		}
		return  super.preHandle(request, response, handler);
	}

}
