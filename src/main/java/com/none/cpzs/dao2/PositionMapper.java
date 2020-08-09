package com.none.cpzs.dao2;

import com.none.cpzs.vo.PageRequest;

import java.util.List;
import java.util.Map;

public interface PositionMapper {
    List<Map<String,Object>> selectTodayEntrust(PageRequest request);
    List<Map<String,Object>> selectTodayEntrustT1(PageRequest request);
    List<Map<String,Object>> selectPositionRangeByFundPool(PageRequest request);
    List<Map<String,Object>> selectTradeHistory(PageRequest request);
    List<Map<String,Object>> selectSecAccountTradeRange(PageRequest request);
    List<Map<String,Object>> selectCurrentPositionT1(PageRequest request);

    /**
     * 查询成交排名
     * @param request
     * @return
     */
    List<Map<String,Object>> selectTradeRange(PageRequest request);

    Map<String,Object> selectTodayEntrustSum(PageRequest request);
    Map<String,Object> selectTodayEntrustT1Sum(PageRequest request);
    Map<String,Object> selectPositionRangeByFundPoolSum(PageRequest request);
    Map<String,Object> selectTradeHistorySum(PageRequest request);
    Map<String,Object> selectSecAccountTradeRangeSum(PageRequest request);
    Map<String,Object> selectCurrentPositionT1Sum(PageRequest request);
    Map<String,Object> selectTradeRangeSum(PageRequest request);

    List<Map<String,Object>> selectPositionRange(PageRequest request);
    Map<String,Object> selectPositionRangeSum(PageRequest request);


    List<Map<String,Object>> selectFailEntrust(PageRequest request);

    Map<String,Object> selectFailEntrustSum(PageRequest request);
}