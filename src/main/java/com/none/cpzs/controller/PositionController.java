package com.none.cpzs.controller;

import com.none.cpzs.dao2.PositionMapper;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by shi on 2019/11/15.
 */
@RestController
public class PositionController {
    @Autowired
    private PositionMapper positionMapper;
    @GetMapping("selectTodayEntrust")
    @ApiOperation(value="查询当日委托")
    public Object selectTodayEntrust(){
        return positionMapper.selectTodayEntrust();
    }
    @GetMapping("selectPositionRange")
    @ApiOperation(value="查询机构排名")
    public Object selectPositionRange(){
        return positionMapper.selectPositionRange();
    }
    @GetMapping("selectPositionRangeByFundPool")
    @ApiOperation(value="查询机构持仓排名")
    public Object selectPositionRangeByFundPool(){
        return positionMapper.selectPositionRangeByFundPool();
    }
    @GetMapping("selectTradeHistory")
    @ApiOperation(value="查询交易历史")
    public Object selectTradeHistory(){
        return positionMapper.selectTradeHistory();
    }
}
