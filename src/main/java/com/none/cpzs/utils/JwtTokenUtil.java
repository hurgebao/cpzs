package com.none.cpzs.utils;
//
//import java.util.Date;
//import java.util.HashMap;
//import java.util.Map;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.stereotype.Component;
//
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;

//@Component
public class JwtTokenUtil {
//	private static final Logger LOGGER=LoggerFactory.getLogger(JwtTokenUtil.class);
//	private static final String CLAIM_KEY_USERNAME="sub";
//	private static final String CLAIM_KEY_CREATED="created";
//
//	@Value("${jwt.secret}")
//	private String secret;
//	@Value("${jwt.expiration}")
//	private Long expiration;
//	/**
//                  *   生成token
//	 * @param claims
//	 * @return
//	 *
//	 */
//	private String generateToken(Map<String,Object> claims) {
//		return Jwts.builder()
//				.setClaims(claims)
//				.setExpiration(generateExpirationDate())
//				.signWith(SignatureAlgorithm.HS512, secret)
//				.compact();
//	}
//	/**
//	 *      从token中获取JWT中的payload
//	 * @param token
//	 * @return
//	 */
//	private Claims getClaimsFromToken(String token) {
//		Claims claims=null;
//		try {
//			claims=Jwts.parser().setSigningKey(secret)
//					.parseClaimsJws(token)
//					.getBody();
//		} catch (Exception e) {
//			LOGGER.error("JWT格式验证失败:{}",token);
//		}
//		return claims;
//	}
//	/**
//	 * 生成token 的过期时�?
//	 * @return
//	 */
//	private Date generateExpirationDate() {
//		return new Date(System.currentTimeMillis()+expiration*1000);
//	}
//	/**
//	 *  从token中获取登陆用户名
//	 * @param token
//	 * @return
//	 */
//	public String getUsernameFromToken(String token) {
//		String username;
//		try {
//			Claims claims=getClaimsFromToken(token);
//			username=claims.getSubject();
//		} catch (Exception e) {
//			username=null;
//		}
//		return username;
//	}
//
//	public boolean validateToken(String token,UserDetails userDetails) {
//		String username=getUsernameFromToken(token);
//		return username.equals(userDetails.getUsername()) &&isTokenExpired(token);
//	}
//
//	private boolean isTokenExpired(String token) {
//		Date expireDate=getExpireDateFromToken(token);
//		return expireDate.before(new Date());
//	}
//	private Date getExpireDateFromToken(String token) {
//		Claims claims=getClaimsFromToken(token);
//		return claims.getExpiration();
//	}
//
//	public String generateToken(UserDetails userDetails) {
//		Map<String,Object> claims=new HashMap<>();
//		claims.put(CLAIM_KEY_USERNAME, userDetails.getUsername());
//		claims.put(CLAIM_KEY_CREATED, new Date());
//		return generateToken(claims);
//	}
//	public String refreshToken(String token) {
//		Claims claims=getClaimsFromToken(token);
//		claims.put(CLAIM_KEY_CREATED, new Date());
//		return generateToken(claims);
//	}
}
