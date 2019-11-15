package com.none.cpzs.dao;

import com.none.cpzs.dao.po.OrgInfo;

public interface OrgInfoMapper {
    /**
     *
     * @mbggenerated 2019-11-15
     */
    int deleteByPrimaryKey(Integer id);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int insert(OrgInfo record);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int insertSelective(OrgInfo record);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    OrgInfo selectByPrimaryKey(Integer id);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int updateByPrimaryKeySelective(OrgInfo record);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int updateByPrimaryKey(OrgInfo record);
}