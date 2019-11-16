package com.none.cpzs.dao2;

import java.util.List;
import java.util.Map;

public interface PositionMapper {
    List<Map<String,Object>> selectPositionByMarket();
}