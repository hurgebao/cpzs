package com.none.cpzs.dao1;

import com.none.cpzs.po.MyFocusFundPool;

public interface MyFocusFundPoolMapper {
    /**
     *
     * @mbggenerated 2019-11-15
     */
    int deleteByPrimaryKey(Integer id);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int insert(MyFocusFundPool record);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int insertSelective(MyFocusFundPool record);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    MyFocusFundPool selectByPrimaryKey(Integer id);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int updateByPrimaryKeySelective(MyFocusFundPool record);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int updateByPrimaryKey(MyFocusFundPool record);
}