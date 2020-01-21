package com.none.cpzs.annotation;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
/**
 * 日志记录
 * @author xiangtai
 *
 */
@Target({ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface FileLog {
	/**
	 * 名称
	 * @return
	 */
	String name() default "";
	/**
	 * 级别
	 * @return
	 */
	LogLevel level() default LogLevel.INFO;
}
