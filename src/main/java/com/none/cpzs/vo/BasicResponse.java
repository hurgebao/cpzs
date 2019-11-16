package com.none.cpzs.vo;

import com.none.cpzs.common.BaseVO;
import lombok.Getter;
import lombok.Setter;

/**
 * Created by shi on 2019/11/16.
 */
@Getter
@Setter
public class BasicResponse extends BaseVO {
    /**
     * 返回码
     */
    private String returnCode;
    /**
     * 返回信息
     */
    private String returnMsg;
}
