package com.none.cpzs.vo;

import com.none.cpzs.po.MyFocusAccount;
import com.none.cpzs.po.MyFocusFundPool;
import com.none.cpzs.po.MyFocusStock;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * Created by shi on 2020/2/5.
 */
@Getter
@Setter
public class SelectCondition {
    private List<MyFocusStock> stockCodeList;
    private List<MyFocusFundPool> fundPoolCodeList;
    private List<MyFocusAccount> accountNoList;
}
