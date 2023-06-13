package ru.micro.start.authservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.micro.start.authservice.model.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(String name);
}
