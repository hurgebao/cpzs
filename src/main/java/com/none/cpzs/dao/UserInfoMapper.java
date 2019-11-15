package com.none.cpzs.dao;

import com.none.cpzs.dao.po.UserInfo;

public interface UserInfoMapper {
    /**
     *
     * @mbggenerated 2019-11-15
     */
    int deleteByPrimaryKey(Integer id);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int insert(UserInfo record);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int insertSelective(UserInfo record);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    UserInfo selectByPrimaryKey(Integer id);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int updateByPrimaryKeySelective(UserInfo record);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int updateByPrimaryKey(UserInfo record);
}