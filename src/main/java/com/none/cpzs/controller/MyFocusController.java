package com.none.cpzs.controller;

import com.none.cpzs.dao1.MyFocusStockMapper;
import com.none.cpzs.dao1.OrgInfoMapper;
import com.none.cpzs.po.MyFocusStock;
import com.none.cpzs.po.OrgInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by admin on 2019/11/15.
 * 我关注的信息
 */
@Api(tags="我的关注")
@RestController
public class MyFocusController {
    @Autowired
    private MyFocusStockMapper myFocusStockMapper;
    @Autowired
    private OrgInfoMapper orgInfoMapper;
    @GetMapping("stock")
    @ApiOperation(value="我关注的股票")
    public MyFocusStock getStock(){
        return myFocusStockMapper.selectByPrimaryKey(1);
    }
    @GetMapping("org")
    @ApiOperation(value="我关注的机构")
    public OrgInfo org(){
        return orgInfoMapper.selectByPrimaryKey(1);
    }


}
