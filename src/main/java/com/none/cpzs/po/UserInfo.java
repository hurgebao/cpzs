package com.none.cpzs.po;

import com.none.cpzs.common.BaseVO;

import java.util.Date;

public class UserInfo extends BaseVO {
    /**
     * 主键
     */
    private Integer id;

    /**
     * 手机号
     */
    private String mobileNo;

    /**
     * 用户姓名
     */
    private String userName;

    /**
     * 密码
     */
    private String password;

    /**
     * 状态:0正常 1停用 
     */
    private String status;

    /**
     * 备注
     */
    private String remark;

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
     * 用户姓名
     * @return user_name 用户姓名
     */
    public String getUserName() {
        return userName;
    }

    /**
     * 用户姓名
     * @param userName 用户姓名
     */
    public void setUserName(String userName) {
        this.userName = userName == null ? null : userName.trim();
    }

    /**
     * 密码
     * @return password 密码
     */
    public String getPassword() {
        return password;
    }

    /**
     * 密码
     * @param password 密码
     */
    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
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
     * 备注
     * @return remark 备注
     */
    public String getRemark() {
        return remark;
    }

    /**
     * 备注
     * @param remark 备注
     */
    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
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