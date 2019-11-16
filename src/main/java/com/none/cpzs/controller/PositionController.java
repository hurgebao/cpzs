package com.none.cpzs.controller;

import com.none.cpzs.dao2.PositionMapper;
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
    public Object selectTodayEntrust(){
        return positionMapper.selectTodayEntrust();
    }
    @GetMapping("selectPositionRange")
    public Object selectPositionRange(){
        return positionMapper.selectPositionRange();
    }
    @GetMapping("selectPositionRangeByFundPool")
    public Object selectPositionRangeByFundPool(){
        return positionMapper.selectPositionRangeByFundPool();
    }
    @GetMapping("selectTradeHistory")
    public Object selectTradeHistory(){
        return positionMapper.selectTradeHistory();
    }
}
