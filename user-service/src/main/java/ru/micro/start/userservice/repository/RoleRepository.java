package ru.micro.start.userservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.micro.start.userservice.model.Role;

import java.util.List;
import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(String name);
    List<Role> findByNameIn(List<String> names);
}
