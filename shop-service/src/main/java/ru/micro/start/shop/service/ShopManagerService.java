package ru.micro.start.shop.service;

import ru.micro.start.shop.model.ShopManager;

import java.util.List;

public interface ShopManagerService {
    boolean addManagerToShop(String token, ShopManager shopManager);
    List<ShopManager> getShopManagers(String shopName, String fullAddress);
}
