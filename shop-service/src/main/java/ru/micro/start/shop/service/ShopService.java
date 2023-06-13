package ru.micro.start.shop.service;

import ru.micro.start.shop.model.Shop;

import java.util.List;

public interface ShopService {
    List<Shop> getAll();

    boolean addShop(String token, Shop shop);

    List<Shop> getShopByName(String shopName);

    Shop findShopByNameAndFullAddress(String shopName, String fullAddress);
}
