package com.exam.member;

public interface MemberService {

    // 회원가입
    public void save(MemberDTO dto);

    // mypage
    public MemberDTO findById(String userid);
}
