package ru.micro.start.authserver.service;

import ru.micro.start.authserver.model.Role;

import java.util.List;

public interface JwtService {
    boolean validateToken(final String token);
    String generateToken(String userName, List<Role> roles);
}
