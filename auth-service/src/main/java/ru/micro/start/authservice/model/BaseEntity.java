package ru.micro.start.authservice.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.LastModifiedDate;

import java.util.Date;

@MappedSuperclass
@Data
public class BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "created", nullable = false, updatable = false)
    @CreationTimestamp
    private Date created;

    @LastModifiedDate
    @Column(name = "updated")
    @UpdateTimestamp
    private Date updated;


}
