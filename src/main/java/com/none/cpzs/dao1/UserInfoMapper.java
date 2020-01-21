package com.none.cpzs.dao1;

import com.none.cpzs.po.UserInfo;

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
    UserInfo selectByUsername(String username);

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