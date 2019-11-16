package com.none.cpzs.vo;

import com.none.cpzs.common.BaseVO;
import lombok.Getter;
import lombok.Setter;

/**
 * Created by shi on 2019/11/16.
 */
@Getter
@Setter
public class PageRequest extends BasicRequest {
    private String stock_code;
    private String stock_name;
    private String tran_data;
    /**
     * 是否包含非股票产品
     */
    private Boolean isContainNoStock;
    private Integer pageSize;
    private Integer currPage;
    private String order;
    private String sort;
}
