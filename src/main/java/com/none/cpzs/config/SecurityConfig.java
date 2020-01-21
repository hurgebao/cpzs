package com.none.cpzs.config;

import java.util.List;

import com.none.cpzs.filter.JwtAuthenticationTokenFilter;
import com.none.cpzs.service.RestAuthenticationEntryPoint;
import com.none.cpzs.service.RestfulAccessDeniedHandler;
import com.none.cpzs.service.UmsAdminService;
import com.none.cpzs.vo.AdminUserDetails;
import com.none.cpzs.vo.UmsAdmin;
import com.none.cpzs.vo.UmsPermission;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled=true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	private UmsAdminService adminService;
	@Autowired
	private RestfulAccessDeniedHandler restfulAccessDeniedHandler;
	@Autowired
	private RestAuthenticationEntryPoint restAuthenticationEntryPoint;
	@Autowired
	private JwtAuthenticationTokenFilter jwtAuthenticationTokenFilter;
	
	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		httpSecurity.csrf()
			.disable()
			.sessionManagement()
			.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			.and()
			.authorizeRequests()
			.antMatchers(
					"/*",
					"/login",
					"/*.html",
					"/*.html",
					"/favicon.ico",
					"/**/*.html",
					"/**/*.html",
					"/**/*.css",
					"/**/*.js",
					"/**/*.png",
					"/swagger-resources/**",
					"/v2/api-docs/**")
			.permitAll()
			.antMatchers("/admin/login","/admin/register")
			.permitAll()
			.antMatchers(HttpMethod.OPTIONS)
			.permitAll()
			.anyRequest()
			.authenticated();
		httpSecurity.headers().frameOptions().disable().cacheControl();
		httpSecurity.addFilterBefore(jwtAuthenticationTokenFilter, UsernamePasswordAuthenticationFilter.class);
		httpSecurity.exceptionHandling()
			.accessDeniedHandler(restfulAccessDeniedHandler)
			.authenticationEntryPoint(restAuthenticationEntryPoint);
	}
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService())
			.passwordEncoder(passwordEncoder());
	}
	@Bean
	public UserDetailsService userDetailService() {
		return username->{
			UmsAdmin admin=adminService.getAdminByUsername(username);
			if(admin!=null) {
				List<UmsPermission> permissionList=adminService.getPermissionList(admin.getId());
				return new AdminUserDetails(admin,permissionList);
			}
			throw new UsernameNotFoundException("用户名或密码错误");
		};
	}
	
	private PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	private JwtAuthenticationTokenFilter jwtAuthenticationTokenFilter() {
		return new JwtAuthenticationTokenFilter();
	}
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception{
		return super.authenticationManagerBean();
	}
	
}
