package ru.micro.start.authservice.service;

import ru.micro.start.authservice.model.Role;

import java.util.List;

public interface JwtService {
    boolean validateToken(final String token);
    String generateToken(String userName, List<Role> roles);
}
