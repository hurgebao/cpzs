package com.none.cpzs.controller;

import com.none.cpzs.annotation.FileLog;
import com.none.cpzs.dao2.PositionMapper;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by shi on 2019/11/15.
 */
@RestController
public class PositionController {
    @Autowired
    private PositionMapper positionMapper;
    @FileLog
    @PostMapping("selectTodayEntrust")
    @ApiOperation(value="查询当日委托")
    public Object selectTodayEntrust(){
        return positionMapper.selectTodayEntrust();
    }
    @FileLog
    @PostMapping("selectTodayEntrustT1")
    @ApiOperation(value="查询当日委托")
    public Object selectTodayEntrustT1(){
        return positionMapper.selectTodayEntrustT1();
    }
    @PostMapping("selectTodayEntrustT1All")
    @ApiOperation(value="查询当日委托")
    public Object selectTodayEntrustT1All(){
        return positionMapper.selectTodayEntrustT1All();
    }
    @PostMapping("selectPositionRange")
    @ApiOperation(value="查询机构排名")
    public Object selectPositionRange(){
        return positionMapper.selectPositionRange();
    }
    @PostMapping("selectPositionRangeByFundPool")
    @ApiOperation(value="查询机构持仓排名")
    public Object selectPositionRangeByFundPool(){
        return positionMapper.selectPositionRangeByFundPool();
    }
    @PostMapping("selectTradeHistory")
    @ApiOperation(value="查询交易历史")
    public Object selectTradeHistory(){
        return positionMapper.selectTradeHistory();
    }

    @PostMapping("selectSecAccountTradeRange")
    @ApiOperation(value="查询证券账户交易排名")
    public Object selectSecAccountTradeRange(){
        return positionMapper.selectSecAccountTradeRange();
    }


    @PostMapping("selectCurrentPositionT1")
    @ApiOperation(value="查询当日持仓")
    public Object selectCurrentPositionT1(){
        return positionMapper.selectCurrentPositionT1();
    }

}
