package ru.micro.start.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.micro.start.shop.model.VisitTask;

import java.util.List;

@Repository
public interface VisitTaskRepository extends JpaRepository<VisitTask, Long> {
    List<VisitTask> findByUsernameOrCreatedBy(String username, String createdBy);
}
