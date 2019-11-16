package com.none.cpzs.config;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import javax.sql.DataSource;

/**
 * Created by shi on 2019/11/15.
 */
// 配置mybatis的接口类放的地方
@MapperScan(basePackages ="com.none.cpzs.dao2", sqlSessionFactoryRef = "test2SqlSessionFactory")
//表示这个类为一个配置类
@Configuration
public class DataSourceConfigT1 {
    // 将这个对象放入Spring容器中
    @Bean(name = "test2DataSource")
    // 读取application.properties中的配置参数映射成为一个对象
    // prefix表示参数的前缀
    @ConfigurationProperties(prefix = "spring.datasource.t1")
    public DataSource getDateSource1() {
        return DataSourceBuilder.create().build();
    }
    @Bean(name = "test2SqlSessionFactory")
    // 表示这个数据源是默认数据源
    // @Qualifier表示查找Spring容器中名字为test2DataSource的对象
    public SqlSessionFactory test2SqlSessionFactory(@Qualifier("test2DataSource") DataSource datasource)
            throws Exception {
        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
        bean.setDataSource(datasource);
        bean.setMapperLocations(
                // 设置mybatis的xml所在位置
                new PathMatchingResourcePatternResolver().getResources("classpath*:mybatis/t1/*.xml"));
        return bean.getObject();
    }
    @Bean("test2SqlSessionTemplate")
    // 表示这个数据源是默认数据源
    public SqlSessionTemplate test2sqlsessiontemplate(
            @Qualifier("test2SqlSessionFactory") SqlSessionFactory sessionfactory) {
        return new SqlSessionTemplate(sessionfactory);
    }
}
