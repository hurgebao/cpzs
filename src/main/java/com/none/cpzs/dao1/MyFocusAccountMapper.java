package com.none.cpzs.dao1;

import com.none.cpzs.po.MyFocusAccount;

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