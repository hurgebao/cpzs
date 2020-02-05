package com.none.cpzs.vo;

import com.none.cpzs.common.BaseVO;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * Created by shi on 2019/11/16.
 */
@Getter
@Setter
public class PageRequest extends BasicRequest {
    private List<String> stockCodeList;
    private List<Long> fundPoolCodeList;
    private List<Long> accountNoList;
    /**
     * 是否包含非股票产品
     */
    private Boolean isContainNoStock;
    private Integer beginIndex;
    private Integer rows;
    private Integer page;
    private String order;
    private String sort;

    public Integer getBeginIndex() {
        return (page-1)*rows;
    }
}
