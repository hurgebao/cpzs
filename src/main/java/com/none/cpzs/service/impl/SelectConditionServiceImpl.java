package com.none.cpzs.service.impl;

import com.none.cpzs.dao1.MyFocusAccountMapper;
import com.none.cpzs.dao1.MyFocusFundPoolMapper;
import com.none.cpzs.dao1.MyFocusStockMapper;
import com.none.cpzs.po.MyFocusAccount;
import com.none.cpzs.po.MyFocusFundPool;
import com.none.cpzs.po.MyFocusStock;
import com.none.cpzs.service.SelectConditionService;
import com.none.cpzs.utils.SessionUtil;
import com.none.cpzs.vo.SelectCondition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by shi on 2020/2/6.
 */
@Service
public class SelectConditionServiceImpl implements SelectConditionService {
    @Autowired
    private MyFocusStockMapper myFocusStockMapper;
    @Autowired
    private MyFocusFundPoolMapper myFocusFundPoolMapper;
    @Autowired
    private MyFocusAccountMapper myFocusAccountMapper;
    @Override
    public void refreshCache() {
        Integer userId= SessionUtil.getUser().getId();
        List<MyFocusStock> myFocusStocks = myFocusStockMapper.selectByUserId(userId);
        List<MyFocusFundPool> myFocusFundPools = myFocusFundPoolMapper.selectByUserId(userId);
        List<MyFocusAccount> myFocusAccount= myFocusAccountMapper.selectByUserId(userId);
        SelectCondition s=new SelectCondition();
        s.setFundPoolCodeList(myFocusFundPools);
        s.setStockCodeList(myFocusStocks);
        s.setAccountNoList(myFocusAccount);
        SessionUtil.setSelect(s);
    }
}
