package ru.micro.start.shop.model;

import jakarta.persistence.*;
import lombok.Data;

/**
 * Сущность модераторов магазина, которые могут создавать таски пользователям
 * */
@Entity
@Table(name = "shop_manager")
@Data
public class ShopManager extends BaseEntity {

    @Column(name = "username")
    private String username;

    @ManyToOne(fetch = FetchType.EAGER)
    private Shop shop;

}
