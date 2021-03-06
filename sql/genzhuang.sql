一、操盘类客户（黄金）
二、分析类客户（收益率高，投资成功率高）
三、追涨成功率高客户（收益率高）
某些客户属于散户，其交易不能说明主力交易意图


--查询当日所有机构持仓市值排名及买卖成交量(筛选操盘股票)
select a.*,b.total_trade_num,b.buy_num,b.sell_num from 
(
select 
stock_code,
fund_pool_code,
max(stock_name) as stock_name,
sum(ifnull(recent_market_value,0)) as recent_market_value,
sum(ifnull(total_volume,0)) as total_volume,
sum(ifnull(available_sell_volume,0)) as available_sell_volume,
sum(ifnull(total_volume,0)*cost_price)/sum(ifnull(total_volume,0)) as cost_price,
max(current_price) as current_price
from tcdb.t_securities_trader_hold 
where data_date=current_date()   group by stock_code,fund_pool_code 
) a
left join 
(
select 
tmp.stock_code,
tmp.fund_pool_code,
max(tmp.stock_name) as stock_name,
sum(ifnull(tmp.buy_num,0)) as buy_num,
sum(ifnull(tmp.sell_num,0)) as sell_num,
sum(ifnull(tmp.buy_num,0)+ifnull(tmp.sell_num,0)) as total_trade_num
from
(
select stock_code,stock_name,fund_pool_code,case when bs_flag='0' then transaction_vloume else 0 end as buy_num,case when bs_flag='1' then transaction_vloume else 0 end as sell_num from tcdb.t_securities_trader_entrust where data_date=current_date()  and fund_pool_code=1621 
)tmp
group by tmp.stock_code,fund_pool_code
) b 
on a.stock_code=b.stock_code and a.fund_pool_code=b.fund_pool_code
order by a.recent_market_value desc,b.total_trade_num desc ;


--查询当日某机构持仓市值排名及买卖成交量(筛选操盘股票)
select a.*,b.total_trade_num,b.buy_num,b.sell_num from 
(
select 
stock_code,
max(stock_name) as stock_name,
sum(ifnull(recent_market_value,0)) as recent_market_value,
sum(ifnull(total_volume,0)) as total_volume,
sum(ifnull(available_sell_volume,0)) as available_sell_volume,
sum(ifnull(total_volume,0)*cost_price)/sum(ifnull(total_volume,0)) as cost_price,
max(current_price) as current_price
from tcdb.t_securities_trader_hold 
where data_date=current_date() and fund_pool_code=1621  group by stock_code 
) a
left join 
(
select 
tmp.stock_code,
max(tmp.stock_name) as stock_name,
sum(ifnull(tmp.buy_num,0)) as buy_num,
sum(ifnull(tmp.sell_num,0)) as sell_num,
sum(ifnull(tmp.buy_num,0)+ifnull(tmp.sell_num,0)) as total_trade_num
from
(
select stock_code,stock_name,case when bs_flag='0' then transaction_vloume else 0 end as buy_num,case when bs_flag='1' then transaction_vloume else 0 end as sell_num 
from tcdb.t_securities_trader_entrust where data_date=current_date()  and fund_pool_code=1621 
)tmp
group by tmp.stock_code
) b 
on a.stock_code=b.stock_code
order by a.recent_market_value desc,b.total_trade_num desc ;


--查询某只股票历史操作记录(查看操盘股票活跃交易日)
select a.*,b.total_trade_num,b.buy_num,b.sell_num,b.jmr_num,b.jmr_num/a.total_volume*100 as rate from 
(
select 
data_date,
max(current_price) as current_price,
sum(ifnull(recent_market_value,0)) as market_value  ,
sum(ifnull(total_volume,0)) as total_volume,
sum(ifnull(available_sell_volume,0)) as enable,
sum(ifnull(total_volume,0)*cost_price)/sum(ifnull(total_volume,0)) as cost_price
from tcdb.t_securities_trader_hold 
where stock_code='002822'   and fund_pool_code=1621 group by data_date 
) a
left join 
(
select 
tmp.data_date,
sum(ifnull(tmp.buy_num,0)) as buy_num,
sum(ifnull(tmp.sell_num,0)) as sell_num,
sum(ifnull(tmp.buy_num,0)+ifnull(tmp.sell_num,0)) as total_trade_num,
sum(ifnull(tmp.buy_num,0)-ifnull(tmp.sell_num,0)) as jmr_num
from
(
select data_date,stock_code,stock_name,case when bs_flag='0' then transaction_vloume else 0 end as buy_num,case when bs_flag='1' then transaction_vloume else 0 end as sell_num from tcdb.t_securities_trader_entrust 
where stock_code='002822'  and fund_pool_code=1621 
)tmp
group by tmp.data_date
) b 
on a.data_date=b.data_date
order by a.data_date desc ;

--查看某天股票走势与买卖热力图
select action_time,bs_flag,bs_flag_desc,status_desc,order_no,order_price,order_volume,transaction_vloume,transaction_price  from tcdb.t_securities_trader_entrust where stock_code='002822' and data_date='2019-11-15' and fund_pool_code=1621  and bs_flag in ('0','1') ;

--通过本系统交易的

--通过券商交易的
2019-11-14
10001886
10001889 安信850_信用
10001890
10001891
10001929 张旭鹏_信用
10002059 王泽盛_信用
10001971
10002002

select 
tmp.securities_account_no,
sum(tmp.buy_num),
sum(tmp.sell_num)
from
(
select 
    securities_account_no,
    case when bs_flag='0' then transaction_vloume else 0 end as buy_num,
    case when bs_flag='1' then transaction_vloume else 0 end as sell_num 
from 
tcdb.t_securities_trader_entrust 
where stock_code='002822'  and fund_pool_code=1621  and data_date='2019-11-20'
) tmp
group by tmp.securities_account_no;



select * from tcdb.t_securities_trader_entrust where stock_name like'中装转债';



select a.*,b.total_trade_num,b.buy_num,b.sell_num,b.jmr_num,b.jmr_num/a.total_volume*100 from 
(
select 
data_date,
max(current_price) as current_price,
sum(ifnull(recent_market_value,0)) as market_value  ,
sum(ifnull(total_volume,0)) as total_volume,
sum(ifnull(available_sell_volume,0)) as enable,
sum(ifnull(total_volume,0)*cost_price)/sum(ifnull(total_volume,0)) as cost_price
from tcdb.t_securities_trader_hold 
where stock_code='128060'   and fund_pool_code=1621 group by data_date 
) a
left join 
(
select 
tmp.data_date,
sum(ifnull(tmp.buy_num,0)) as buy_num,
sum(ifnull(tmp.sell_num,0)) as sell_num,
sum(ifnull(tmp.buy_num,0)+ifnull(tmp.sell_num,0)) as total_trade_num,
sum(ifnull(tmp.buy_num,0)-ifnull(tmp.sell_num,0)) as jmr_num
from
(
select data_date,stock_code,stock_name,case when bs_flag='0' then transaction_vloume else 0 end as buy_num,case when bs_flag='1' then transaction_vloume else 0 end as sell_num from tcdb.t_securities_trader_entrust 
where stock_code='128060'  and fund_pool_code=1621 
)tmp
group by tmp.data_date
) b 
on a.data_date=b.data_date
order by a.data_date desc ;



select
   ip2,count(*)
from (
select distinct account_no,ip2 from bcdb.b_system_log where tran_date='2019-11-19' and service_name='ACCOUNTLOGIN')
tmp group by ip1,ip2
having count(*)>1
;

select action_time,securities_account_no,bs_flag,bs_flag_desc,status_desc,order_no,order_price,order_volume,transaction_vloume,transaction_price  from tcdb.t_securities_trader_entrust where stock_code='002822' and data_date='2019-11-22' and fund_pool_code=1621  and bs_flag in ('0','1') order by action_time asc ;


select stock_code,max(stock_name),sum(deal_amt),sum(case when buy_sell_flag='0' then deal_amt else 0 end) as buy_amt,sum(case when buy_sell_flag='1' then deal_amt else 0 end) as sell_amt from tcdb.t_trade_entrust_info group by stock_code order by sum(deal_amt) desc limit 10;

select stock_code,max(stock_name),sum(deal_amt),sum(case when buy_sell_flag='0' then deal_amt else 0 end) as buy_amt,sum(case when buy_sell_flag='1' then deal_amt else 0 end) as sell_amt from tcdb.t_trade_entrust_history where entrust_date=current_date() group by stock_code order by sum(deal_amt) desc limit 10;



select stock_code,max(stock_name),sum(deal_amt) from tcdb.t_trade_entrust_info  group by stock_code order by sum(deal_amt) desc limit 10;