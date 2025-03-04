package com.exam.member;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//lombok 으로 AllArgsConstructor~Builder 까지 총 6개 주기
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder
@Entity
public class Member {

	@Id
	String userid;  // 아이디 (primary key)
	String passwd;  // 비밀번호
	String username;  // 사용자 이름
	String post;  // 주소
	String addr1;  // 주소1
	String addr2;  // 주소2
	String phoneNumber;  // 전화번호
	String email;  // 이메일
	String role = "USER";  // 역할, 기본값 'USER'

}
