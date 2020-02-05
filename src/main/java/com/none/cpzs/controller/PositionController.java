package com.none.cpzs.controller;

import com.none.cpzs.annotation.FileLog;
import com.none.cpzs.dao2.PositionMapper;
import com.none.cpzs.vo.PageRequest;
import com.none.cpzs.vo.PageResponse;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

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
    public PageResponse<Map<String,Object>> selectTodayEntrust(PageRequest request){
        PageResponse<Map<String,Object>> response=new PageResponse<Map<String,Object>>();
        List<Map<String,Object>> list= positionMapper.selectTodayEntrust(request);
        response.setRows(list);
        return response;
    }
    @PostMapping("selectPositionRangeByFundPool")
    @ApiOperation(value="查询机构持仓排名")
    public Object selectPositionRangeByFundPool(PageRequest request){
        PageResponse<Map<String,Object>> response=new PageResponse<Map<String,Object>>();
        List<Map<String,Object>> list= positionMapper.selectPositionRangeByFundPool(request);
        response.setRows(list);
        return response;
    }
    @FileLog
    @PostMapping("selectTodayEntrustT1")
    @ApiOperation(value="查询当日委托")
    public Object selectTodayEntrustT1(PageRequest request){
        PageResponse<Map<String,Object>> response=new PageResponse<Map<String,Object>>();
        List<Map<String,Object>> list= positionMapper.selectTodayEntrustT1(request);
        response.setRows(list);
        return response;
    }
    @PostMapping("selectTradeHistory")
    @ApiOperation(value="查询交易历史")
    public Object selectTradeHistory(PageRequest request){
        PageResponse<Map<String,Object>> response=new PageResponse<Map<String,Object>>();
        List<Map<String,Object>> list= positionMapper.selectTradeHistory(request);
        response.setRows(list);
        return response;
    }

    @PostMapping("selectSecAccountTradeRange")
    @ApiOperation(value="查询证券账户交易排名")
    public Object selectSecAccountTradeRange(PageRequest request){
        PageResponse<Map<String,Object>> response=new PageResponse<Map<String,Object>>();
        List<Map<String,Object>> list= positionMapper.selectSecAccountTradeRange(request);
        response.setRows(list);
        return response;
    }


    @PostMapping("selectCurrentPositionT1")
    @ApiOperation(value="查询当日持仓")
    public Object selectCurrentPositionT1(PageRequest request){
        PageResponse<Map<String,Object>> response=new PageResponse<Map<String,Object>>();
        List<Map<String,Object>> list= positionMapper.selectCurrentPositionT1(request);
        response.setRows(list);
        return response;
    }

}
