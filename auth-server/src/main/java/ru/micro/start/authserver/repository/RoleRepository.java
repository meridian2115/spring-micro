package ru.micro.start.authserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.micro.start.authserver.model.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(String name);
}
