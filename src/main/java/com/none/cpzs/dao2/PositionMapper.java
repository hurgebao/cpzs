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

}