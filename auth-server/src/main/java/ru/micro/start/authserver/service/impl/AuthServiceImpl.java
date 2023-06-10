package ru.micro.start.authserver.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ru.micro.start.authserver.model.Role;
import ru.micro.start.authserver.model.Status;
import ru.micro.start.authserver.model.User;
import ru.micro.start.authserver.repository.RoleRepository;
import ru.micro.start.authserver.repository.UserRepository;
import ru.micro.start.authserver.service.AuthService;
import ru.micro.start.authserver.service.JwtService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AuthServiceImpl implements AuthService {
    private final UserRepository repository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Autowired
    public AuthServiceImpl(UserRepository repository, RoleRepository roleRepository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.roleRepository = roleRepository;
    }

    public void saveUser(User user) {
        Optional<Role> role = roleRepository.findByName("USER");
        if (role.isEmpty()) {
            throw new RuntimeException("В БД не найдена роль с именем USER");
        }
        List<Role> roles = new ArrayList<>();
        roles.add(role.get());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setStatus(Status.ACTIVE);
        user.setRoles(roles);
        repository.save(user);
    }

    public String generateToken(String username, List<Role> roles) {
        return jwtService.generateToken(username, roles);
    }

    public boolean validateToken(String token) {
        return jwtService.validateToken(token);
    }

    @Override
    public Optional<User> getUser(String username) {
        return repository.findByUsername(username);
    }


}
