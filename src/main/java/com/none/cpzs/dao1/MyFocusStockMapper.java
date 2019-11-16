package com.none.cpzs.dao1;

import com.none.cpzs.po.MyFocusStock;

public interface MyFocusStockMapper {
    /**
     *
     * @mbggenerated 2019-11-15
     */
    int deleteByPrimaryKey(Integer id);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int insert(MyFocusStock record);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int insertSelective(MyFocusStock record);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    MyFocusStock selectByPrimaryKey(Integer id);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int updateByPrimaryKeySelective(MyFocusStock record);

    /**
     *
     * @mbggenerated 2019-11-15
     */
    int updateByPrimaryKey(MyFocusStock record);
}