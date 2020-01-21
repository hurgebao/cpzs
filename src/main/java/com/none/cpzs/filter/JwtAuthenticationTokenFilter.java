package com.none.cpzs.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.none.cpzs.utils.JwtTokenUtil;
import com.none.cpzs.utils.SessionUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;


@Component
public class JwtAuthenticationTokenFilter extends OncePerRequestFilter {
	private static Logger logger=LoggerFactory.getLogger(JwtAuthenticationTokenFilter.class);
	@Autowired
	private UserDetailsService userDetailsService;
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	@Value("${jwt.tokenHeader}")
	private String tokenHeader;
	@Value("${jwt.tokenHead}")
	private String tokenHead;
	
	@Override
	public void doFilterInternal(
			HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException{
		String authHeader = request.getHeader(this.tokenHeader);
		if(authHeader !=null && authHeader.startsWith(this.tokenHead)) {
			String authToken=authHeader.substring(this.tokenHead.length());
			String username=jwtTokenUtil.getUsernameFromToken(authToken);
			logger.info("check username:{}", SessionUtil.getUser().getMobileNo());
			if(username!=null && SecurityContextHolder.getContext().getAuthentication()==null) {
				UserDetails userDetails=this.userDetailsService.loadUserByUsername(username);
				if(jwtTokenUtil.validateToken(authToken, userDetails)) {
					 UsernamePasswordAuthenticationToken authentication=new UsernamePasswordAuthenticationToken(userDetails, null,userDetails.getAuthorities());
					 authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
					 logger.info("authenticated user:{}",username);
					 SecurityContextHolder.getContext().setAuthentication(authentication);
				}
			}
		}
		filterChain.doFilter(request, response);
	}
}
