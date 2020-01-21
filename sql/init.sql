
create database cpzsdb;
grant all PRIVILEGES  on cpzsdb.* to cpzsuser@'%' IDENTIFIED BY '!Q2w3e4r';
use cpzsdb;
create table user_info(
   id int PRIMARY key auto_increment COMMENT '主键',
   mobile_no varchar(30) NOT NULL COMMENT '手机号',
   user_name varchar(30) UNIQUE NOT NULL COMMENT '用户姓名',
   password  varchar(30) NOT NULL COMMENT '密码',
   status varchar(30) NOT NULL COMMENT '状态:0正常 1停用 ',
   remark varchar(30)  COMMENT '备注',
   create_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
   update_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最近更新时间'
) COMMENT '用户信息表';
INSERT  INTO cpzsdb.user_info (mobile_no,user_name,password,status)values ('15811010314','15811010314','123456','0');

create table my_focus_stock(
   id int PRIMARY key auto_increment COMMENT '主键',
   user_id int not null COMMENT '用户id',
   org_code varchar(20) NOT NULL COMMENT '机构代码',
   stock_code varchar(10)  COMMENT '股票代码',
   stock_name varchar(10)  COMMENT '股票名称',
   status varchar(30) NOT NULL COMMENT '状态:0正常 1停用 ',
   create_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
   update_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最近更新时间'
) comment '我关注的股票';

create table my_focus_fund_pool(
   id int PRIMARY key auto_increment COMMENT '主键',
   user_id int not null COMMENT '用户id',
   org_code varchar(20) NOT NULL COMMENT '机构代码',
   fund_pool_code bigint(5) COMMENT '资金池编号',
   status varchar(30) NOT NULL COMMENT '状态:0正常 1停用 ',
   create_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
   update_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最近更新时间'
) comment '我关注的机构';

create table my_focus_account(
   id int PRIMARY key auto_increment COMMENT '主键',
   user_id int not null COMMENT '用户id',
   org_code varchar(20) NOT NULL COMMENT '机构代码',
   account_no bigint(30)  COMMENT '交易账户编号',
   status varchar(30) NOT NULL COMMENT '状态:0正常 1停用 ',
   create_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
   update_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最近更新时间'
) comment '我关注的交易账户';


CREATE  table org_info(
   id int PRIMARY key auto_increment COMMENT '主键',
   org_name varchar(20) NOT NULL COMMENT '机构名称',
   org_code varchar(20) NOT NULL COMMENT '机构代码',
   service_url varchar(20)  COMMENT '对外服务url',
   remark varchar(20)  COMMENT '备注',
   status varchar(1) NOT NULL COMMENT '状态：0正常 1停用',
   create_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
   update_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最近更新时间'
) comment ='机构信息';
insert into org_info (org_code,org_name,status) values ('T1','T1','0');
insert into org_info (org_code,org_name,status) values ('WANGFANG','WANGFANG','0');



create table log_info(
   id int PRIMARY key auto_increment COMMENT '主键',
   tran_date varchar(10) NOT NULL COMMENT '业务日期',
   mobile_no varchar(30) NOT NULL COMMENT '手机号',
   mobilc_mac varchar(30)  COMMENT '手机mac',
   mobile_imei varchar(30)  COMMENT '手机imer',
   mobile_ip varchar(30)  COMMENT '手机请求ip',
   mobile_region varchar(50)  COMMENT '手机登录地区',
   result_code varchar(10)  COMMENT '结果代码',
   result_msg varchar(50)  COMMENT '结果描述',
   create_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
   update_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最近更新时间'
) COMMENT '日志表';