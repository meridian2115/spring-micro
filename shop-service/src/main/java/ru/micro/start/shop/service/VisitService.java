package ru.micro.start.shop.service;

import ru.micro.start.shop.model.VisitTask;

public interface VisitService {

    boolean addVisitTask(String token, VisitTask visitTask);

}
