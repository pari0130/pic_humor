package com.pic.humor.picboard.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.servlet.ModelAndView;

import com.pic.humor.picboard.dto.PicBoardDto;

public interface PicService {
	public ModelAndView insertPics(HttpServletRequest request, PicBoardDto dto);

	public ModelAndView getContList(HttpServletRequest request, int pageNum);
	public ModelAndView detail(HttpServletRequest request, int cont_id);
	public void increaseViewCount(HttpServletRequest request, int cont_id);
}
