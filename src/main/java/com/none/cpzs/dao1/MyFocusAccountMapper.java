package com.none.cpzs.dao1;

import com.none.cpzs.po.MyFocusAccount;
import org.apache.ibatis.annotations.Param;

import java.util.List;

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

    int updateStatusByUserId(@Param("userId")Integer userId,@Param("status")String status);

    List<MyFocusAccount> selectByUserId(int userId);

    int deleteByUserIdAndAccount(@Param("userId")Integer userId,@Param("accountNo") Long accountNo);
}