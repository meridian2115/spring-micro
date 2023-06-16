package ru.micro.start.userservice.service;

import ru.micro.start.userservice.model.Status;
import ru.micro.start.userservice.model.User;

import java.util.List;

public interface UserService {
    User findUser(String username);
    User getCurrentUserFromJwt(String token);
    void updateUserRoles(String username, List<String> roles);

    List<User> getAll();

    List<User> getAllUsersByStatus(List<Status> status);

    boolean updateUserPasswordByJwt(String token, String password);

    void updateUserPassword(String username, String password);

    void updateUserStatus(String username, String status);

    boolean updateUserInfo(String token, User user);

    List<User> getUsersByUsernames(List<String> usernames);
}
