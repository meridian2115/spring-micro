package ru.micro.start.shop.model;

import jakarta.persistence.*;
import lombok.Data;


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
}
