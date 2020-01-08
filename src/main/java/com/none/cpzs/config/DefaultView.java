package com.none.cpzs.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Created by shi on 2019/12/9.
 */
//@Configuration
public class DefaultView  implements WebMvcConfigurer {
    @Override
    public void addViewControllers(ViewControllerRegistry registry)
    {

//        registry.addViewController("/").setViewName("forward:/login.html");
//
//        registry.setOrder(Ordered.HIGHEST_PRECEDENCE);
//
//        WebMvcConfigurer.super.addViewControllers(registry);

    }
}
