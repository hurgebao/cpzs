package com.none.cpzs.config;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

//@Configuration
//@EnableSwagger2
public class Swagger2Config {
	@Bean
	public Docket createRestApi() {
		return new Docket(DocumentationType.SWAGGER_2)
				.apiInfo(apiInfo())
				.select()
				.apis(RequestHandlerSelectors.basePackage("com.none.cpzs.controller"))
				.paths(PathSelectors.any())
				.build()
				.securityContexts(securityContexts())
				.securitySchemes(securitySchemes());
	}

	private List<ApiKey> securitySchemes() {
		List<ApiKey> result=new ArrayList<>();
		ApiKey apiKey=new ApiKey("Authorization", "Authorization", "header");
		result.add(apiKey);
		return result;
	}

	private List<SecurityContext> securityContexts() {
		List<SecurityContext> result=new ArrayList<>();
		result.add(getContextPath("/brand/.*"));
		return result;
	}

	private SecurityContext getContextPath(String pathRegex) {
		return SecurityContext.builder()
				.securityReferences(defaultAuth())
				.forPaths(PathSelectors.regex(pathRegex))
				.build();
	}

	private List<SecurityReference> defaultAuth() {
		List<SecurityReference> result=new ArrayList<>();
		AuthorizationScope authorizationScope=new AuthorizationScope("global","accessEverything");
		AuthorizationScope[] authorizationScopes=new AuthorizationScope[1];
		authorizationScopes[0]=authorizationScope;
		result.add(new SecurityReference("Authorization",authorizationScopes));
		return result;
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder()
				.title("接口文档")
				.description("cmdb-gateway")
				.version("1.0")
				.build();
	}
}
