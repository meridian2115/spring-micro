package ru.micro.start.userservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.micro.start.userservice.model.Status;
import ru.micro.start.userservice.model.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByUsername(String username);
    List<User> findByStatusIn(List<Status> statuses);
    List<User> findByUsernameIn(List<String> usernames);
}
