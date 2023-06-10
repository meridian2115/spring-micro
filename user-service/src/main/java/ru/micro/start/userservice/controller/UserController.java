package ru.micro.start.userservice.controller;

import jakarta.ws.rs.HeaderParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.micro.start.userservice.dto.UserInfo;
import ru.micro.start.userservice.model.User;
import ru.micro.start.userservice.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService service;

    @GetMapping("/info")
    public ResponseEntity<UserInfo> findByJwtToken(@RequestHeader(HttpHeaders.AUTHORIZATION) String token) {
        User user = service.getCurrentUserFromJwt(token);
        return ResponseEntity.ok(new UserInfo(user));
    }

    @PutMapping("/change-password")
    public ResponseEntity changeUserPassword(@RequestHeader(HttpHeaders.AUTHORIZATION) String token, @RequestParam String password){
        if (service.updateUserPasswordByJwt(token, password)) {
            return ResponseEntity.ok().build();
        } else {
            return new ResponseEntity(HttpStatus.CONFLICT);
        }
    }
}
