package com.none.cpzs.po;

import com.none.cpzs.common.BaseVO;

import java.util.Date;

public class LogInfo extends BaseVO {
    /**
     * 主键
     */
    private Integer id;

    /**
     * 业务日期
     */
    private String tranDate;

    /**
     * 手机号
     */
    private String mobileNo;

    /**
     * 手机mac
     */
    private String mobilcMac;

    /**
     * 手机imer
     */
    private String mobileImei;

    /**
     * 手机请求ip
     */
    private String mobileIp;

    /**
     * 手机登录地区
     */
    private String mobileRegion;

    /**
     * 结果代码
     */
    private String resultCode;

    /**
     * 结果描述
     */
    private String resultMsg;

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
     * 业务日期
     * @return tran_date 业务日期
     */
    public String getTranDate() {
        return tranDate;
    }

    /**
     * 业务日期
     * @param tranDate 业务日期
     */
    public void setTranDate(String tranDate) {
        this.tranDate = tranDate == null ? null : tranDate.trim();
    }

    /**
     * 手机号
     * @return mobile_no 手机号
     */
    public String getMobileNo() {
        return mobileNo;
    }

    /**
     * 手机号
     * @param mobileNo 手机号
     */
    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo == null ? null : mobileNo.trim();
    }

    /**
     * 手机mac
     * @return mobilc_mac 手机mac
     */
    public String getMobilcMac() {
        return mobilcMac;
    }

    /**
     * 手机mac
     * @param mobilcMac 手机mac
     */
    public void setMobilcMac(String mobilcMac) {
        this.mobilcMac = mobilcMac == null ? null : mobilcMac.trim();
    }

    /**
     * 手机imer
     * @return mobile_imei 手机imer
     */
    public String getMobileImei() {
        return mobileImei;
    }

    /**
     * 手机imer
     * @param mobileImei 手机imer
     */
    public void setMobileImei(String mobileImei) {
        this.mobileImei = mobileImei == null ? null : mobileImei.trim();
    }

    /**
     * 手机请求ip
     * @return mobile_ip 手机请求ip
     */
    public String getMobileIp() {
        return mobileIp;
    }

    /**
     * 手机请求ip
     * @param mobileIp 手机请求ip
     */
    public void setMobileIp(String mobileIp) {
        this.mobileIp = mobileIp == null ? null : mobileIp.trim();
    }

    /**
     * 手机登录地区
     * @return mobile_region 手机登录地区
     */
    public String getMobileRegion() {
        return mobileRegion;
    }

    /**
     * 手机登录地区
     * @param mobileRegion 手机登录地区
     */
    public void setMobileRegion(String mobileRegion) {
        this.mobileRegion = mobileRegion == null ? null : mobileRegion.trim();
    }

    /**
     * 结果代码
     * @return result_code 结果代码
     */
    public String getResultCode() {
        return resultCode;
    }

    /**
     * 结果代码
     * @param resultCode 结果代码
     */
    public void setResultCode(String resultCode) {
        this.resultCode = resultCode == null ? null : resultCode.trim();
    }

    /**
     * 结果描述
     * @return result_msg 结果描述
     */
    public String getResultMsg() {
        return resultMsg;
    }

    /**
     * 结果描述
     * @param resultMsg 结果描述
     */
    public void setResultMsg(String resultMsg) {
        this.resultMsg = resultMsg == null ? null : resultMsg.trim();
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