package ru.micro.start.authserver.service;

import ru.micro.start.authserver.model.Role;
import ru.micro.start.authserver.model.User;

import java.util.List;
import java.util.Optional;

public interface AuthService {
    void saveUser(User user);
    String generateToken(String username, List<Role> roles);
    boolean validateToken(String token);

    Optional<User> getUser(String username);
}
