package com.none.cpzs.po;

import com.none.cpzs.common.BaseVO;

import java.util.Date;

public class OrgInfo extends BaseVO {
    /**
     * 主键
     */
    private Integer id;

    /**
     * 机构名称
     */
    private String orgName;

    /**
     * 机构代码
     */
    private String orgCode;

    /**
     * 对外服务url
     */
    private String serviceUrl;

    /**
     * 备注
     */
    private String remark;

    /**
     * 状态：0正常 1停用
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
     * 机构名称
     * @return org_name 机构名称
     */
    public String getOrgName() {
        return orgName;
    }

    /**
     * 机构名称
     * @param orgName 机构名称
     */
    public void setOrgName(String orgName) {
        this.orgName = orgName == null ? null : orgName.trim();
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
     * 对外服务url
     * @return service_url 对外服务url
     */
    public String getServiceUrl() {
        return serviceUrl;
    }

    /**
     * 对外服务url
     * @param serviceUrl 对外服务url
     */
    public void setServiceUrl(String serviceUrl) {
        this.serviceUrl = serviceUrl == null ? null : serviceUrl.trim();
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
     * 状态：0正常 1停用
     * @return status 状态：0正常 1停用
     */
    public String getStatus() {
        return status;
    }

    /**
     * 状态：0正常 1停用
     * @param status 状态：0正常 1停用
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