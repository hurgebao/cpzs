package com.none.cpzs.dao2;

import java.util.List;
import java.util.Map;

public interface PositionMapper {
    List<Map<String,Object>> selectTodayEntrust();
    List<Map<String,Object>> selectTodayEntrustT1();
    List<Map<String,Object>> selectPositionRange();
    List<Map<String,Object>> selectPositionRangeByFundPool();
    List<Map<String,Object>> selectTradeHistory();
}