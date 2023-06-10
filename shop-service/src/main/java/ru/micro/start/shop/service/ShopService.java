package ru.micro.start.shop.service;

import ru.micro.start.shop.model.Shop;

import java.util.List;

public interface ShopService {
    List<Shop> getAll();

    boolean addShop(Shop shop);

    Shop getShopByName(String shopName);
}
