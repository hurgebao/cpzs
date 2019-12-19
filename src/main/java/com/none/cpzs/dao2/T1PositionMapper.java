package com.none.cpzs.dao2;

import java.util.List;
import java.util.Map;

public interface T1PositionMapper {
    List<Map<String,Object>> selectT1CurrentEntrust();
    List<Map<String,Object>> selectT1CurrentPosition();
    List<Map<String,Object>> selectT1HistoryPosition();

}