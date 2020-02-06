package com.none.cpzs.dao2;

import com.alibaba.fastjson.JSON;
import com.none.cpzs.vo.PageRequest;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.*;

/**
 * Created by shi on 2020/1/23.
 */
@SpringBootTest
@RunWith(SpringRunner.class)
public class PositionMapperTest {
    @Autowired
    private PositionMapper positionMapper;
    @org.junit.Test
    public void testSelectTodayEntrust() throws Exception {
        PageRequest request=new PageRequest();
        request.setPage(1);
        request.setRows(10);
        request.setOrder("action_time");
        request.setSort("asc");
        List<String> stockCodeList=new ArrayList<>();
        stockCodeList.add("601288");
        stockCodeList.add("002822");
        stockCodeList.add("000001");
        List<Long> fundPoolCodeList=new ArrayList<Long>();
        fundPoolCodeList.add(1621L);
        List<Long> accountNoList=new ArrayList<Long>();
        accountNoList.add(600001L);
        request.setAccountNoList(accountNoList);
        request.setStockCodeList(stockCodeList);
        request.setFundPoolCodeList(fundPoolCodeList);
        List<Map<String,Object>> list= positionMapper.selectTodayEntrust(request);
        System.out.println(JSON.toJSONString(list));
    }

    @org.junit.Test
    public void testSelectTodayEntrustT1() throws Exception {
        PageRequest request=new PageRequest();
        request.setPage(1);
        request.setRows(10);
        request.setOrder("entrust_time");
        request.setSort("asc");
        List<String> stockCodeList=new ArrayList<>();
        stockCodeList.add("601288");
        stockCodeList.add("002822");
        stockCodeList.add("000001");
        List<Long> fundPoolCodeList=new ArrayList<Long>();
        fundPoolCodeList.add(1621L);
        List<Long> accountNoList=new ArrayList<Long>();
        accountNoList.add(600001L);
        request.setAccountNoList(accountNoList);
        request.setStockCodeList(stockCodeList);
        request.setFundPoolCodeList(fundPoolCodeList);
        List<Map<String,Object>> list= positionMapper.selectTodayEntrustT1(request);
        System.out.println(JSON.toJSONString(list));
    }

    @org.junit.Test
    public void testSelectPositionRangeByFundPool() throws Exception {
        PageRequest request=new PageRequest();
        request.setPage(1);
        request.setRows(10);
        request.setOrder("stock_code");
        request.setSort("asc");
        List<String> stockCodeList=new ArrayList<>();
        stockCodeList.add("601288");
        stockCodeList.add("002822");
        stockCodeList.add("000001");
        List<Long> fundPoolCodeList=new ArrayList<Long>();
        fundPoolCodeList.add(1621L);
        List<Long> accountNoList=new ArrayList<Long>();
        accountNoList.add(600001L);
        request.setAccountNoList(accountNoList);
        request.setStockCodeList(stockCodeList);
        request.setFundPoolCodeList(fundPoolCodeList);
        List<Map<String,Object>> list= positionMapper.selectPositionRangeByFundPool(request);
        System.out.println(JSON.toJSONString(list));
    }

    @org.junit.Test
    public void testSelectTradeHistory() throws Exception {
        PageRequest request=new PageRequest();
        request.setPage(1);
        request.setRows(10);
        request.setOrder("stock_code");
        request.setSort("asc");
        List<String> stockCodeList=new ArrayList<>();
        stockCodeList.add("601288");
        stockCodeList.add("002822");
        stockCodeList.add("000001");
        List<Long> fundPoolCodeList=new ArrayList<Long>();
        fundPoolCodeList.add(1621L);
        List<Long> accountNoList=new ArrayList<Long>();
        accountNoList.add(600001L);
        request.setAccountNoList(accountNoList);
        request.setStockCodeList(stockCodeList);
        request.setFundPoolCodeList(fundPoolCodeList);
        List<Map<String,Object>> list= positionMapper.selectTradeHistory(request);
        System.out.println(JSON.toJSONString(list));
    }

    @org.junit.Test
    public void testSelectSecAccountTradeRange() throws Exception {
        PageRequest request=new PageRequest();
        request.setPage(1);
        request.setRows(10);
        request.setOrder("stock_code");
        request.setSort("asc");
        List<String> stockCodeList=new ArrayList<>();
        stockCodeList.add("601288");
        stockCodeList.add("002822");
        stockCodeList.add("000001");
        List<Long> fundPoolCodeList=new ArrayList<Long>();
        fundPoolCodeList.add(1621L);
        List<Long> accountNoList=new ArrayList<Long>();
        accountNoList.add(600001L);
        request.setAccountNoList(accountNoList);
        request.setStockCodeList(stockCodeList);
        request.setFundPoolCodeList(fundPoolCodeList);
        List<Map<String,Object>> list= positionMapper.selectSecAccountTradeRange(request);
        System.out.println(JSON.toJSONString(list));
    }

    @org.junit.Test
    public void testSelectCurrentPositionT1() throws Exception {
        PageRequest request=new PageRequest();
        request.setPage(1);
        request.setRows(10);
        request.setOrder("stock_code");
        request.setSort("asc");
        List<String> stockCodeList=new ArrayList<>();
        stockCodeList.add("601288");
        stockCodeList.add("002822");
        stockCodeList.add("000001");
        List<Long> fundPoolCodeList=new ArrayList<Long>();
        fundPoolCodeList.add(1621L);
        List<Long> accountNoList=new ArrayList<Long>();
        accountNoList.add(600001L);
        request.setAccountNoList(accountNoList);
        request.setStockCodeList(stockCodeList);
        request.setFundPoolCodeList(fundPoolCodeList);
        List<Map<String,Object>> list= positionMapper.selectCurrentPositionT1(request);
        System.out.println(JSON.toJSONString(list));
    }
}