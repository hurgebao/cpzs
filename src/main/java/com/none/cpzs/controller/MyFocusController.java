package com.none.cpzs.controller;

import com.none.cpzs.dao.MyFocusStockMapper;
import com.none.cpzs.dao.OrgInfoMapper;
import com.none.cpzs.dao.po.MyFocusStock;
import com.none.cpzs.dao.po.OrgInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by admin on 2019/11/15.
 * 我关注的信息
 */
@RestController
public class MyFocusController {
    @Autowired
    private MyFocusStockMapper myFocusStockMapper;
    @Autowired
    private OrgInfoMapper orgInfoMapper;
    @GetMapping("stock")
    public MyFocusStock getStock(){
        return myFocusStockMapper.selectByPrimaryKey(1);
    }
    @GetMapping("org")
    public OrgInfo org(){
        return orgInfoMapper.selectByPrimaryKey(1);
    }
}
