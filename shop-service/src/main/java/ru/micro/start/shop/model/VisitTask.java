package ru.micro.start.shop.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

/**
 * Задачи для пользователей
 * */

@Entity
@Table(name = "visit")
@Data
public class VisitTask extends BaseEntity {
    @Column(name = "username")
    private String username;

    @ManyToOne
    private Shop shop;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "description")
    private String description;

    @Column(name = "deadline")
    private Date deadline;
}
