package com.none.cpzs.controller;

import com.none.cpzs.annotation.FileLog;
import com.none.cpzs.annotation.LogLevel;
import com.none.cpzs.dao2.PositionMapper;
import com.none.cpzs.po.MyFocusAccount;
import com.none.cpzs.po.MyFocusFundPool;
import com.none.cpzs.po.MyFocusStock;
import com.none.cpzs.utils.SessionUtil;
import com.none.cpzs.vo.PageRequest;
import com.none.cpzs.vo.PageResponse;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by shi on 2019/11/15.
 */
@RestController
public class PositionController {
    @Autowired
    private PositionMapper positionMapper;
    @FileLog(level = LogLevel.DEBUG)
    @PostMapping("selectTodayEntrust")
    @ApiOperation(value="查询当日委托")
    public PageResponse<Map<String,Object>> selectTodayEntrust(PageRequest request){
        initSelectCondition(request);
        PageResponse<Map<String,Object>> response=new PageResponse<Map<String,Object>>();
        List<Map<String,Object>> list= positionMapper.selectTodayEntrust(request);
        if(list!=null && list.size()>0){
            Map<String,Object> sumRecord= positionMapper.selectTodayEntrustSum(request);
            list.add(sumRecord);
            int totalNum=Integer.valueOf(sumRecord.get("total_num").toString());
            response.setTotal(totalNum);
        }else{
            response.setTotal(0);
        }
        response.setRows(list);
        return response;
    }

    private void initSelectCondition(PageRequest request) {
        List<MyFocusAccount> accList=SessionUtil.getSelect().getAccountNoList();
        List<MyFocusFundPool> fundPoolList=SessionUtil.getSelect().getFundPoolCodeList();
        List<MyFocusStock> stockList=SessionUtil.getSelect().getStockCodeList();
        List<Long> accountNoList=new ArrayList<>();
        for(MyFocusAccount account:accList){
            if("0".equals(account.getStatus())){
                accountNoList.add(account.getAccountNo());
            }
        }
        List<Long> fundPoolCodeList=new ArrayList<>();
        for(MyFocusFundPool myFocusFundPool:fundPoolList){
            if("0".equals(myFocusFundPool.getStatus())){
                fundPoolCodeList.add(myFocusFundPool.getFundPoolCode());
            }
        }
        List<String> stockCodeList=new ArrayList<>();
        for(MyFocusStock myFocusStock:stockList){
            if("0".equals(myFocusStock.getStatus())){
                stockCodeList.add(myFocusStock.getStockCode());
            }
        }
        request.setAccountNoList(accountNoList);
        request.setFundPoolCodeList(fundPoolCodeList);
        request.setStockCodeList(stockCodeList);
    }

    @PostMapping("selectPositionRangeByFundPool")
    @ApiOperation(value="查询机构持仓排名")
    public Object selectPositionRangeByFundPool(PageRequest request){
        initSelectCondition(request);
        PageResponse<Map<String,Object>> response=new PageResponse<Map<String,Object>>();
        List<Map<String,Object>> list= positionMapper.selectPositionRangeByFundPool(request);
        if(list!=null && list.size()>0){
            Map<String,Object> sumRecord= positionMapper.selectPositionRangeByFundPoolSum(request);
            list.add(sumRecord);
            int totalNum=Integer.valueOf(sumRecord.get("total_num").toString());
            response.setTotal(totalNum);
        }else{
            response.setTotal(0);
        }
        response.setRows(list);
        return response;
    }
    @FileLog(level = LogLevel.DEBUG)
    @PostMapping("selectTodayEntrustT1")
    @ApiOperation(value="查询当日委托")
    public Object selectTodayEntrustT1(PageRequest request){
        initSelectCondition(request);
        PageResponse<Map<String,Object>> response=new PageResponse<Map<String,Object>>();
        List<Map<String,Object>> list= positionMapper.selectTodayEntrustT1(request);
        if(list!=null && list.size()>0){
            Map<String,Object> sumRecord= positionMapper.selectTodayEntrustT1Sum(request);
            list.add(sumRecord);
            int totalNum=Integer.valueOf(sumRecord.get("total_num").toString());
            response.setTotal(totalNum);
        }else{
            response.setTotal(0);
        }
        response.setRows(list);
        return response;
    }
    @PostMapping("selectTradeHistory")
    @ApiOperation(value="查询交易历史")
    public Object selectTradeHistory(PageRequest request){
        initSelectCondition(request);
        PageResponse<Map<String,Object>> response=new PageResponse<Map<String,Object>>();
        List<Map<String,Object>> list= positionMapper.selectTradeHistory(request);
        if(list!=null && list.size()>0){
            Map<String,Object> sumRecord= positionMapper.selectTradeHistorySum(request);
            list.add(sumRecord);
            int totalNum=Integer.valueOf(sumRecord.get("total_num").toString());
            response.setTotal(totalNum);
        }else{
            response.setTotal(0);
        }
        response.setRows(list);
        return response;
    }

    @PostMapping("selectSecAccountTradeRange")
    @ApiOperation(value="查询证券账户交易排名")
    public Object selectSecAccountTradeRange(PageRequest request){
        initSelectCondition(request);
        PageResponse<Map<String,Object>> response=new PageResponse<Map<String,Object>>();
        List<Map<String,Object>> list= positionMapper.selectSecAccountTradeRange(request);
        if(list!=null && list.size()>0){
            Map<String,Object> sumRecord= positionMapper.selectSecAccountTradeRangeSum(request);
            list.add(sumRecord);
            int totalNum=Integer.valueOf(sumRecord.get("total_num").toString());
            response.setTotal(totalNum);
        }else{
            response.setTotal(0);
        }
        response.setRows(list);
        return response;
    }


    @PostMapping("selectCurrentPositionT1")
    @ApiOperation(value="查询当日持仓")
    public Object selectCurrentPositionT1(PageRequest request){
        initSelectCondition(request);
        PageResponse<Map<String,Object>> response=new PageResponse<Map<String,Object>>();
        List<Map<String,Object>> list= positionMapper.selectCurrentPositionT1(request);
        if(list!=null && list.size()>0){
            Map<String,Object> sumRecord= positionMapper.selectCurrentPositionT1Sum(request);
            list.add(sumRecord);
            int totalNum=Integer.valueOf(sumRecord.get("total_num").toString());
            response.setTotal(totalNum);
        }else{
            response.setTotal(0);
        }
        response.setRows(list);
        return response;
    }

}
