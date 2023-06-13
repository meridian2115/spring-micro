package ru.micro.start.shop.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.micro.start.shop.model.Address;
import ru.micro.start.shop.model.Shop;
import ru.micro.start.shop.repository.AddressRepository;
import ru.micro.start.shop.repository.ShopRepository;
import ru.micro.start.shop.service.ShopService;

import java.util.List;
import java.util.Optional;

@Service
public class ShopServiceImpl implements ShopService {
    @Autowired
    ShopRepository repository;
    @Autowired
    AddressRepository addressRepository;


    @Override
    public List<Shop> getAll() {
        return repository.findAll();
    }

    public Shop getShopByName(String shopName) {
        Optional<Shop> shopDB = repository.findByName(shopName);
        return shopDB.orElse(null);
    }

    @Override
    public boolean addShop(Shop shop) {
        Optional<Shop> shopDB = repository.findByName(shop.getName());
        if (shopDB.isPresent()) {
            return false;
        }
        Optional<Address> addressDB = addressRepository.findByFullAddress(shop.getAddress().getFullAddress());
        if (addressDB.isPresent()) {
            shop.setAddress(addressDB.get());
        } else {
            addressRepository.save(shop.getAddress());
        }
        repository.save(shop);
        return true;
    }
}
