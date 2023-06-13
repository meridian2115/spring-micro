package ru.micro.start.shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.micro.start.shop.dto.VisitTaskRequest;
import ru.micro.start.shop.service.VisitService;

@RestController
@RequestMapping("/shop/visit")
public class VisitController {

    @Autowired
    VisitService service;

    @PostMapping("/add")
    public ResponseEntity<String> addVisitTask(@RequestHeader(HttpHeaders.AUTHORIZATION) String token, @RequestBody VisitTaskRequest request) {
        if (service.addVisitTask(token, request.toVisitTask())){
            return ResponseEntity.ok("Задача успешно добавлена");
        }
        return new ResponseEntity<>("Задача не добавлена. Нет прав или такой магазин не существует", HttpStatus.CONFLICT);
    }

}
