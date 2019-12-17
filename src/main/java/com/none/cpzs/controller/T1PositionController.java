package com.none.cpzs.controller;

import com.none.cpzs.dao2.PositionMapper;
import com.none.cpzs.dao2.T1PositionMapper;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by shi on 2019/11/15.
 */
@RestController
public class T1PositionController {
    @Autowired
    private T1PositionMapper positionMapper;
    @PostMapping("selectT1CurrentEntrust")
    @ApiOperation(value="查询当日委托")
    public Object selectT1CurrentEntrust(){
        return positionMapper.selectT1CurrentEntrust();
    }
    @PostMapping("selectT1CurrentPosition")
    @ApiOperation(value="查询当日持仓")
    public Object selectT1CurrentPosition(){
        return positionMapper.selectT1CurrentPosition();
    }
    @PostMapping("selectT1HistoryPosition")
    @ApiOperation(value="查询当日持仓")
    public Object selectT1HistoryPosition(){
        return positionMapper.selectT1HistoryPosition();
    }
}
