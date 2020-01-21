package com.none.cpzs.vo;

import com.none.cpzs.po.UserInfo;
import lombok.Getter;
import lombok.Setter;

/**
 * Created by admin on 2019/11/21.
 */
@Getter
@Setter
public class LoginResponse extends BasicResponse {
    /**
     * 令牌
     */
    private String token;

    private UserInfo userInfo;
}
