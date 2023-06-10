package ru.micro.start.userservice.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ru.micro.start.userservice.model.Role;
import ru.micro.start.userservice.model.Status;
import ru.micro.start.userservice.model.User;
import ru.micro.start.userservice.repository.RoleRepository;
import ru.micro.start.userservice.repository.UserRepository;
import ru.micro.start.userservice.service.UserService;
import ru.micro.start.userservice.util.JwtUtil;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    UserRepository repository;
    RoleRepository roleRepository;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository repository, RoleRepository roleRepository, JwtUtil jwtUtil, PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.roleRepository = roleRepository;
        this.jwtUtil = jwtUtil;
        this.passwordEncoder = passwordEncoder;
    }

    public User getCurrentUserFromJwt(String token) {
        String currentUser = jwtUtil.getTokenBody(token.substring(7)).get("sub").toString();
        return findUser(currentUser);
    }

    @Override
    public boolean updateUserPasswordByJwt(String token, String password) {
        User user = getCurrentUserFromJwt(token);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setUpdated(new Date());
        repository.save(user);
        return true;
    }

    @Override
    public void updateUserPassword(String username, String password) {
        User user = findUser(username);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setUpdated(new Date());
        repository.save(user);
    }

    @Override
    public void updateUserRoles(String username, List<String> roles) {
        User user = findUser(username);
        List<Role> updatedRoles = roleRepository.findByNameIn(roles);
        user.setRoles(updatedRoles);
        user.setUpdated(new Date());
        repository.save(user);
    }

    @Override
    public void updateUserStatus(String username, String status) {
        User user = findUser(username);
        user.setStatus(Status.valueOf(status));
        user.setUpdated(new Date());
        repository.save(user);
    }

    @Override
    public List<User> getAll() {
        return repository.findAll();
    }

    @Override
    public List<User> getAllUsersByStatus(List<Status> statuses) {
        return repository.findByStatusIn(statuses);
    }

    public User findUser(String username) {
        Optional<User> user = repository.findByUsername(username);
        return user.orElse(null);
    }

}
