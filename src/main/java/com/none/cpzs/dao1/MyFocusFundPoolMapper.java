package com.none.cpzs.dao1;

import com.none.cpzs.po.MyFocusFundPool;
import org.apache.ibatis.annotations.Param;

import java.util.List;

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

    List<MyFocusFundPool> selectByUserId(int userId);

    int deleteByUserIdAndFundPool(@Param("userId")Integer userId, @Param("fundPoolCode")Long fundPoolCode);
}