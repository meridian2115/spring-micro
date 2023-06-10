package ru.micro.start.shop.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "shop")
public class Shop extends BaseEntity {
    @Column(name = "name")
    private String name;
    @OneToOne(fetch = FetchType.EAGER)
    private Address address;
}
