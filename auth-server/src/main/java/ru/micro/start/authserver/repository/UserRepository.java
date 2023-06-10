package ru.micro.start.authserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.micro.start.authserver.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByUsername(String username);
}
