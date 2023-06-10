package ru.micro.start.userservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.micro.start.userservice.dto.UserInfo;
import ru.micro.start.userservice.model.Status;
import ru.micro.start.userservice.model.User;
import ru.micro.start.userservice.service.UserService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    UserService service;

    @GetMapping("/info/{username}")
    public ResponseEntity<UserInfo> findByUsername(@PathVariable String username) {
        User user = service.findUser(username);
        return ResponseEntity.ok(new UserInfo(user));
    }

    @GetMapping("/info")
    public ResponseEntity<List<UserInfo>> getUsers(@RequestParam(required = false) List<Status> status) {
        List<User> user = status==null ? service.getAll() : service.getAllUsersByStatus(status);
        List<UserInfo> allUserInfo = user.stream().map(UserInfo::new).collect(Collectors.toList());
        return ResponseEntity.ok(allUserInfo);
    }

    @PutMapping("/password/{username}")
    public ResponseEntity changeUserPassword(@PathVariable String username, @RequestParam String password){
        service.updateUserPassword(username, password);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/roles/{username}")
    public ResponseEntity updateUserRoles(@PathVariable String username, @RequestParam List<String> roles) {
        service.updateUserRoles(username, roles);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/status/{username}")
    public ResponseEntity updateUserStatus(@PathVariable String username, @RequestParam String status) {
        service.updateUserStatus(username, status);
        return ResponseEntity.ok().build();
    }
}
