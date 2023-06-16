package ru.micro.start.userservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.micro.start.userservice.dto.FullUserInfo;
import ru.micro.start.userservice.dto.UserInfo;
import ru.micro.start.userservice.model.User;
import ru.micro.start.userservice.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService service;

    @GetMapping("/info")
    public ResponseEntity<FullUserInfo> findByJwtToken(@RequestHeader(HttpHeaders.AUTHORIZATION) String token) {
        User user = service.getCurrentUserFromJwt(token);
        return ResponseEntity.ok(new FullUserInfo(user));
    }

    @GetMapping("/managers")
    public ResponseEntity<List<UserInfo>> getManagersInfo(@RequestParam List<String> managers){
        List<User> users = service.getUsersByUsernames(managers);
        return ResponseEntity.ok(users
                .stream()
                .map(UserInfo::new)
                .toList()
        );
    }

    @PutMapping("/info/update")
    public ResponseEntity<Boolean> updateUserInfo(@RequestHeader(HttpHeaders.AUTHORIZATION) String token, @RequestBody UserInfo request){
        if (service.updateUserInfo(token, request.toUser())){
            return ResponseEntity.ok(true);
        }
        return new ResponseEntity<>(false, HttpStatus.CONFLICT);
    }

    @PutMapping("/change-password")
    public ResponseEntity<Boolean> changeUserPassword(@RequestHeader(HttpHeaders.AUTHORIZATION) String token, @RequestParam String password){
        if (service.updateUserPasswordByJwt(token, password)) {
            return ResponseEntity.ok(false);
        }
        return new ResponseEntity<>(false, HttpStatus.CONFLICT);
    }
}
