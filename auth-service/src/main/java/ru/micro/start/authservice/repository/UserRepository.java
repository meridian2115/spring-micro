package ru.micro.start.authservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.micro.start.authservice.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByUsername(String username);
}
