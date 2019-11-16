package com.none.cpzs.po;

import com.none.cpzs.common.BaseVO;

import java.util.Date;

public class MyFocusStock extends BaseVO {
    /**
     * 主键
     */
    private Integer id;

    /**
     * 用户id
     */
    private Integer userId;

    /**
     * 机构代码
     */
    private String orgCode;

    /**
     * 股票代码
     */
    private String stockCode;

    /**
     * 股票名称
     */
    private String stockName;

    /**
     * 状态:0正常 1停用 
     */
    private String status;

    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 最近更新时间
     */
    private Date updateTime;

    /**
     * 主键
     * @return id 主键
     */
    public Integer getId() {
        return id;
    }

    /**
     * 主键
     * @param id 主键
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 用户id
     * @return user_id 用户id
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * 用户id
     * @param userId 用户id
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    /**
     * 机构代码
     * @return org_code 机构代码
     */
    public String getOrgCode() {
        return orgCode;
    }

    /**
     * 机构代码
     * @param orgCode 机构代码
     */
    public void setOrgCode(String orgCode) {
        this.orgCode = orgCode == null ? null : orgCode.trim();
    }

    /**
     * 股票代码
     * @return stock_code 股票代码
     */
    public String getStockCode() {
        return stockCode;
    }

    /**
     * 股票代码
     * @param stockCode 股票代码
     */
    public void setStockCode(String stockCode) {
        this.stockCode = stockCode == null ? null : stockCode.trim();
    }

    /**
     * 股票名称
     * @return stock_name 股票名称
     */
    public String getStockName() {
        return stockName;
    }

    /**
     * 股票名称
     * @param stockName 股票名称
     */
    public void setStockName(String stockName) {
        this.stockName = stockName == null ? null : stockName.trim();
    }

    /**
     * 状态:0正常 1停用 
     * @return status 状态:0正常 1停用 
     */
    public String getStatus() {
        return status;
    }

    /**
     * 状态:0正常 1停用 
     * @param status 状态:0正常 1停用 
     */
    public void setStatus(String status) {
        this.status = status == null ? null : status.trim();
    }

    /**
     * 创建时间
     * @return create_time 创建时间
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 创建时间
     * @param createTime 创建时间
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 最近更新时间
     * @return update_time 最近更新时间
     */
    public Date getUpdateTime() {
        return updateTime;
    }

    /**
     * 最近更新时间
     * @param updateTime 最近更新时间
     */
    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }
}