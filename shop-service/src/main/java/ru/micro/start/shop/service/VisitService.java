package ru.micro.start.shop.service;

import ru.micro.start.shop.model.VisitTask;

import java.util.List;

public interface VisitService {

    boolean addVisitTask(String token, VisitTask visitTask);

    List<VisitTask> getUserTasks(String token);

}
