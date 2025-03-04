package com.exam.member;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {
    MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("/home")
    public ResponseEntity<String> home(){
        return ResponseEntity.status(200).body("home"); // 200 OK 상태 코드와 함께 "home" 반환
    }

    /*
	 	headers : Content-Type:application/json
	 	body :  {
				   "userid":"llsj09",
				   "passwd":"1234",
				   "username":"이소정",
				   "post": "당감주공",
				   "addr1": "205동",
				   "addr2": "605호",
				   "phoneNumber": "01077389232",
				   "email": "llsj08@naver.com"

				}
	 */

    @PostMapping("/signup")
    public ResponseEntity<MemberDTO> save(@RequestBody MemberDTO dto){
        memberService.save(dto);
        return ResponseEntity.created(null).body(dto); //201
    }

}
