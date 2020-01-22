package com.none.cpzs.config;

import com.none.cpzs.interceptor.SessionInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Created by shi on 2019/12/9.
 */
@Configuration
public class DefaultView  implements WebMvcConfigurer {
    @Autowired
    private SessionInterceptor sessionInterceptor;
    @Override
    public void addViewControllers(ViewControllerRegistry registry)
    {

        registry.addViewController("/").setViewName("forward:/login.html");

        registry.setOrder(Ordered.HIGHEST_PRECEDENCE);

        WebMvcConfigurer.super.addViewControllers(registry);

    }
    //所有的WebMvcConfigurerAdapter组件都会一起起作用
    @Bean //将组件注册在容器中
    public WebMvcConfigurer webMvcConfigurerAdapter(){
        return new WebMvcConfigurer(){

            //注册拦截器
            @Override
            public void addInterceptors(InterceptorRegistry registry) {
                //静态资源； *.css,*.js
                //SpringBoot已经做好了静态资源映射
                registry.addInterceptor(sessionInterceptor).addPathPatterns("/**")
                .excludePathPatterns("/doLogin","/js/**","/common/**","/css/**","/login.html");
                // /**  表示拦截所有路径下的所有请求
//                registry.addInterceptor(sessionInterceptor)
//                        .addPathPatterns("/T1.html");
            }
        };
    }
}
