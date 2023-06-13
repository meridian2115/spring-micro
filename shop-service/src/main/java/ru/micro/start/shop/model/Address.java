package ru.micro.start.shop.model;

import jakarta.persistence.*;
import lombok.Data;

/**
 * Адреса магазинов.
 * */

@Data
@Entity
@Table(name = "address")
public class Address extends BaseEntity{
    private String fullAddress;
}
