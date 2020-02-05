package com.none.cpzs.controller;

import com.none.cpzs.common.CodeConstant;
import com.none.cpzs.dao1.MyFocusAccountMapper;
import com.none.cpzs.dao1.MyFocusFundPoolMapper;
import com.none.cpzs.dao1.MyFocusStockMapper;
import com.none.cpzs.dao1.OrgInfoMapper;
import com.none.cpzs.po.MyFocusAccount;
import com.none.cpzs.po.MyFocusFundPool;
import com.none.cpzs.po.MyFocusStock;
import com.none.cpzs.po.OrgInfo;
import com.none.cpzs.utils.SessionUtil;
import com.none.cpzs.utils.StringUtils;
import com.none.cpzs.vo.BasicResponse;
import com.none.cpzs.vo.SelectCondition;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by admin on 2019/11/15.
 * 我关注的信息
 */
@Api(tags="我的关注")
@RestController
public class MyFocusController {
    @Autowired
    private MyFocusStockMapper myFocusStockMapper;
    @Autowired
    private MyFocusFundPoolMapper myFocusFundPoolMapper;
    @Autowired
    private MyFocusAccountMapper myFocusAccountMapper;
    @Autowired
    private OrgInfoMapper orgInfoMapper;
    @GetMapping("stock")
    @ApiOperation(value="我关注的股票")
    public MyFocusStock getStock(){
        return myFocusStockMapper.selectByPrimaryKey(1);
    }
    @GetMapping("org")
    @ApiOperation(value="我关注的机构")
    public OrgInfo org(){
        return orgInfoMapper.selectByPrimaryKey(1);
    }
    @GetMapping("getCondition")
    public SelectCondition getCondition(){
        SelectCondition s=new SelectCondition();
        int userId= SessionUtil.getUser().getId();
        List<MyFocusStock> stockList=myFocusStockMapper.selectByUserId(userId);
        List<MyFocusFundPool> fundPoolList=myFocusFundPoolMapper.selectByUserId(userId);
        List<MyFocusAccount> accountList=myFocusAccountMapper.selectByUserId(userId);
        s.setAccountNoList(accountList);
        s.setFundPoolCodeList(fundPoolList);
        s.setStockCodeList(stockList);
        return s;
    }
    @PostMapping("addFocus")
    public BasicResponse addFocus(String operatorType,String content,String stockName){
        BasicResponse response=new BasicResponse();
        if(StringUtils.trim(operatorType)==null || StringUtils.trim(content)==null){
            response.setReturnCode(CodeConstant.OPERATE_FAIL);
            response.setReturnMsg("参数不能为空");
            return response;
        }
        if("stock".equals(operatorType)){
            String stockCode=content;
            MyFocusStock myFocusStock=new MyFocusStock();
            myFocusStock.setStatus("0");
            myFocusStock.setStockCode(stockCode);
            myFocusStock.setStockName(stockName);
            myFocusStock.setOrgCode("T1");
            myFocusStock.setUserId(SessionUtil.getUser().getId());
            myFocusStockMapper.insertSelective(myFocusStock);
        }else if("account".equals(operatorType)){
            Long accountNo=Long.valueOf(content);
            MyFocusAccount myFocusAccount=new MyFocusAccount();
            myFocusAccount.setUserId(SessionUtil.getUser().getId());
            myFocusAccount.setOrgCode("T1");
            myFocusAccount.setStatus("0");
            myFocusAccount.setAccountNo(accountNo);
            myFocusAccountMapper.insertSelective(myFocusAccount);
        }else if("fundPool".equals(operatorType)){
            Long fundPoolCode=Long.valueOf(content);
            MyFocusFundPool myFocusFundPool=new MyFocusFundPool();
            myFocusFundPool.setUserId(SessionUtil.getUser().getId());
            myFocusFundPool.setOrgCode("T1");
            myFocusFundPool.setStatus("0");
            myFocusFundPool.setFundPoolCode(fundPoolCode);
            myFocusFundPoolMapper.insertSelective(myFocusFundPool);
        }
        response.setReturnCode(CodeConstant.SUCCESS);
        response.setReturnMsg("操作成功");
        return response;
    }
    @PostMapping("deleteFocus")
    public BasicResponse delete(String operatorType,String content){
        BasicResponse response=new BasicResponse();
        if(StringUtils.trim(operatorType)==null || StringUtils.trim(content)==null){
            response.setReturnCode(CodeConstant.OPERATE_FAIL);
            response.setReturnMsg("参数不能为空");
            return response;
        }
        if("stock".equals(operatorType)){
            String stockCode=content;
            myFocusStockMapper.deleteByUserIdAndStock(SessionUtil.getUser().getId(),stockCode);
        }else if("account".equals(operatorType)){
            Long accountNo=Long.valueOf(content);
            myFocusAccountMapper.deleteByUserIdAndAccount(SessionUtil.getUser().getId(), accountNo);
        }else if("fundPool".equals(operatorType)){
            Long fundPoolCode=Long.valueOf(content);
             myFocusFundPoolMapper.deleteByUserIdAndFundPool(SessionUtil.getUser().getId(), fundPoolCode);
        }
        response.setReturnCode(CodeConstant.SUCCESS);
        response.setReturnMsg("操作成功");
        return response;
    }
}
