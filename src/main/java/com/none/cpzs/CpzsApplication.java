package com.none.cpzs;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.none.cpzs.dao")
public class CpzsApplication {

	public static void main(String[] args) {
		SpringApplication.run(CpzsApplication.class, args);
	}

}
