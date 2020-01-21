package com.none.cpzs.annotation;

import com.none.cpzs.exception.BasicException;
import com.none.cpzs.utils.SessionUtil;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.alibaba.fastjson.JSON;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class FileLogSupport {
	private static Logger logger=LoggerFactory.getLogger("File");
	@Around("within(com.none.cpzs.controller.*) && @annotation(rl)")
	public Object log(ProceedingJoinPoint jp,FileLog rl) throws Throwable {
		Long startTime=System.currentTimeMillis();
		Object[] args=jp.getArgs();//获取目标方法体参�?
		String className=jp.getTarget().getClass().toString();//获取类名
		className=className.substring(className.lastIndexOf(".")+1);
		String signature=jp.getSignature().toString();
		String methodName = signature.substring(signature.lastIndexOf(".")+1, signature.indexOf("(")); 
//		String returnType=signature.substring(0,signature.indexOf(" "));
		String methodNameCh=rl.name();
        StringBuilder logPrefix=new StringBuilder();
        logPrefix.append(className).append(".").append(methodName).append(SessionUtil.getUser() != null ? " "+SessionUtil.getUser().getUserName():"");
        if(logger.isDebugEnabled() && LogLevel.DEBUG.equals(rl.level())){
        	StringBuilder request=new StringBuilder(logPrefix);
        	logger.debug((request.append(" start ").append(methodNameCh).append(JSON.toJSONString(args))).toString());
        }else if(logger.isInfoEnabled() && LogLevel.INFO.equals(rl.level())){
        	StringBuilder request=new StringBuilder(logPrefix);
        	logger.info((request.append(" start ").append(methodNameCh).append(JSON.toJSONString(args))).toString());
        }
        try {
			Object returnObj=jp.proceed(args);
			Long endTime=System.currentTimeMillis();
			if(logger.isDebugEnabled() && LogLevel.DEBUG.equals(rl.level())){
				StringBuilder response=new StringBuilder(logPrefix);
				logger.debug((response.append(" end   ").append(methodNameCh).append(JSON.toJSONString(returnObj)).append(" ").append(endTime-startTime)).toString());
			}else if(logger.isInfoEnabled() && LogLevel.INFO.equals(rl.level())){
				StringBuilder response=new StringBuilder(logPrefix);
				logger.info((response.append(" end   ").append(methodNameCh).append(JSON.toJSONString(returnObj)).append(" ").append(endTime-startTime)).toString());
			}
	        return returnObj;
		}catch(BasicException e){
			StringBuilder response=new StringBuilder(logPrefix);
			Long endTime=System.currentTimeMillis();
			logger.error((response.append(" error ").append(methodNameCh).append(" ").append(e.getCode()).append(" ").append(e.getMessage()).append(" ").append(endTime-startTime)).toString());
			throw e;
		}catch (Throwable e) {
			logger.error(logPrefix.append(" error ").append(methodNameCh).toString());
			logger.error("{}",e);
			throw e;
		}
	}
}
