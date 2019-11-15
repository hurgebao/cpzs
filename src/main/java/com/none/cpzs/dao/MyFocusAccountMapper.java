package com.none.cpzs.dao;

import com.none.cpzs.dao.po.MyFocusAccount;

public interface MyFocusAccountMapper {
    /**
     *
     * @mbggenerated 2019-11-15
     */
    int deleteByPrimaryKey(Integer id);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int insert(MyFocusAccount record);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int insertSelective(MyFocusAccount record);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    MyFocusAccount selectByPrimaryKey(Integer id);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int updateByPrimaryKeySelective(MyFocusAccount record);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int updateByPrimaryKey(MyFocusAccount record);
}