package ru.micro.start.shop.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "address")
public class Address extends BaseEntity{
    private String fullAddress;
}
