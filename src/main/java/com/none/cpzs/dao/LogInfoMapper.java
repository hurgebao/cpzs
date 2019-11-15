package com.none.cpzs.dao;

import com.none.cpzs.dao.po.LogInfo;

public interface LogInfoMapper {
    /**
     *
     * @mbggenerated 2019-11-15
     */
    int deleteByPrimaryKey(Integer id);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int insert(LogInfo record);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int insertSelective(LogInfo record);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    LogInfo selectByPrimaryKey(Integer id);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int updateByPrimaryKeySelective(LogInfo record);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int updateByPrimaryKey(LogInfo record);
}