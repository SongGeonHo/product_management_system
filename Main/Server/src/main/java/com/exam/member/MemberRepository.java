package com.exam.member;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member,String> {

    	/*
		 JpaRepository에서 기본으로 제공하는 CRUD 메서드 사용 가능

		- 전체 엔티티 조회 : findAll() - 리턴타입: List
		- 특정 엔티티 조회 : findById(ID id) - 리턴타입: Optional
		- 엔티티 저장 : save(entity)
		- 전체 엔티티 삭제 : deleteAll()
		- 특정 엔티티 id로 삭제 : deleteById(ID id)
		- 특정 엔티티 엔티티로 삭제 : delete(T entity)
		- 엔티티 수정 : 메서드 지원 없이 더티체킹 이용
		- 엔티티 갯수 : count()
	    */

    // 로그인 검증을 위한 쿼리 메서드
    Member findByUseridAndPasswd(String userid, String passwd);
}
