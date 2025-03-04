package com.exam.service;

import java.util.Map;

import com.exam.member.Member;
import com.exam.member.MemberDTO;

// 로그인만 구현하자.
public interface AuthenticationService {

	public MemberDTO findByUseridAndPasswd(String userid, String passwd);
}
