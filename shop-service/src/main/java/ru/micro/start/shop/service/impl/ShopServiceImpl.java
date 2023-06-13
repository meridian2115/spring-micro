package ru.micro.start.shop.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.micro.start.shop.model.Address;
import ru.micro.start.shop.model.Shop;
import ru.micro.start.shop.model.ShopManager;
import ru.micro.start.shop.repository.AddressRepository;
import ru.micro.start.shop.repository.ShopManagerRepository;
import ru.micro.start.shop.repository.ShopRepository;
import ru.micro.start.shop.service.ShopService;
import ru.micro.start.shop.util.JwtUtil;

import java.util.List;

@Service
@Slf4j
public class ShopServiceImpl implements ShopService {
    @Autowired
    ShopRepository repository;
    @Autowired
    AddressRepository addressRepository;
    @Autowired
    ShopManagerRepository shopManagerRepository;
    @Autowired
    JwtUtil jwtUtil;

    @Override
    public List<Shop> getAll() {
        return repository.findAll();
    }

    public List<Shop> getShopByName(String shopName) {
        return repository.findByName(shopName);
    }

    @Override
    public boolean addShop(String token, Shop shop) {
        String shopName = shop.getName();
        String fullAddress = shop.getAddress().getFullAddress();
        if (findShopByNameAndFullAddress(shopName, fullAddress) != null) {
            log.info(String.format("Магазин [%s] по адресу [%s] имеется в справочнике", shopName, fullAddress));
            return false;
        }

        List<Address> addressDB = addressRepository.findByFullAddress(shop.getAddress().getFullAddress());
        if (!addressDB.isEmpty()) {
            shop.setAddress(addressDB.get(0));
        } else {
            addressRepository.save(shop.getAddress());
        }
        repository.save(shop);
        ShopManager shopUser = new ShopManager();
        shopUser.setShop(shop);
        shopUser.setUsername(jwtUtil.getCurrentUserFromJwt(token));
        shopManagerRepository.save(shopUser);
        return true;
    }

    public Shop findShopByNameAndFullAddress(String shopName, String fullAddress) {
        List<Shop> shops = repository.findByName(shopName)
                .stream()
                .filter(shop -> shop.getAddress().getFullAddress().equals(fullAddress))
                .toList();
        if (shops.isEmpty()) {
            return null;
        }
        if (shops.size() > 1) {
            log.info(String.format("При запросе [shopName = %s, fullAddress = %s] в справочнике магазинов обнаружено %d строк." +
                    "\nБудет произведен отбор первой записи", shopName, fullAddress, shops.size()));
        }
        return shops.get(0);
    }
}
