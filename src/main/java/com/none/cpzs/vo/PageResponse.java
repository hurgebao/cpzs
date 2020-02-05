package com.none.cpzs.vo;

import java.util.List;
import java.util.Map;

/**
 * 分页接口返回对象
 *
 * @param <T>
 */
public class PageResponse<T> extends BasicResponse {
	private static final long serialVersionUID = 1L;
	/**
	 * 总数量
	 */
	private int total = 0; // 总数
	/**
	 * 所有数据
	 */
	private List<T> rows;
	/**
	 * 页脚汇总行
	 */
	private List<Map<String, String>> footer;

	public PageResponse() {

	}

	public PageResponse(int total, List<T> rows) {
		this.setTotal(total);
		this.setRows(rows);
	}

	/**
	 * 
	 * @return 总数量
	 */
	public int getTotal() {
		return total;
	}

	/**
	 * 
	 * @param total
	 *            总数量
	 */
	public void setTotal(int total) {
		this.total = total;
	}

	/**
	 * 
	 * @return 所有数据
	 */
	public List<T> getRows() {
		return rows;
	}

	/**
	 * 
	 * @param rows
	 *            所有数据
	 */
	public void setRows(List<T> rows) {
		this.rows = rows;
	}

	/**
	 * 
	 * @return 页脚汇总行
	 */
	public List<Map<String, String>> getFooter() {
		return footer;
	}

	/**
	 * 
	 * @param footer
	 *            页脚汇总行
	 */
	public void setFooter(List<Map<String, String>> footer) {
		this.footer = footer;
	}
}
