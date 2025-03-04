package com.exam.service;

import com.exam.member.Member;
import com.exam.member.MemberDTO;
import com.exam.member.MemberRepository;
import org.springframework.stereotype.Service;

import java.util.Map;


// 로그인만 구현하자.
@Service
public class AuthenticationServiceImpl implements AuthenticationService{

	//repository 생성자주입
	MemberRepository memberRepository;
	public AuthenticationServiceImpl(MemberRepository memberRepository) {
		this.memberRepository = memberRepository;
	}


	@Override
	public MemberDTO findByUseridAndPasswd(String userid, String passwd) {
		Member member = memberRepository.findByUseridAndPasswd(userid, passwd);

		if (member != null) {
			//Member -> MemberDTO 로 바꾸는 작업
			MemberDTO memberDTO = MemberDTO.builder()
					.userid(member.getUserid())
					.passwd(member.getPasswd())
					.username(member.getUsername())
					.post(member.getPost())
					.addr1(member.getAddr1())
					.addr2(member.getAddr2())
					.phoneNumber(member.getPhoneNumber())
					.email(member.getEmail())
					.role(member.getRole())
					.build();

			return memberDTO;
		}
		// 로그인 실패 시 null 반환
		return null;
	}
}
