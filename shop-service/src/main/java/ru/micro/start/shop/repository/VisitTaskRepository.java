package ru.micro.start.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.micro.start.shop.model.VisitTask;

@Repository
public interface VisitTaskRepository extends JpaRepository<VisitTask, Long> {
}
