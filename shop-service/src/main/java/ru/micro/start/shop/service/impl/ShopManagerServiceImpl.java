package ru.micro.start.shop.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.micro.start.shop.model.Shop;
import ru.micro.start.shop.model.ShopManager;
import ru.micro.start.shop.repository.ShopManagerRepository;
import ru.micro.start.shop.service.ShopManagerService;
import ru.micro.start.shop.service.ShopService;
import ru.micro.start.shop.util.JwtUtil;

import java.util.ArrayList;
import java.util.List;

import static ru.micro.start.shop.util.Messages.SHOP_ABSENT;

@Service
@Slf4j
public class ShopManagerServiceImpl implements ShopManagerService {

    @Autowired
    ShopService shopService;

    @Autowired
    ShopManagerRepository shopManagerRepository;

    @Autowired
    JwtUtil jwtUtil;

    @Override
    public boolean addManagerToShop(String token, ShopManager shopManager) {
        String shopName = shopManager.getShop().getName();
        String fullAddress = shopManager.getShop().getAddress().getFullAddress();
        Shop shop = shopService.findShopByNameAndFullAddress(shopName, fullAddress);
        if (shop == null) {
            log.info(String.format(SHOP_ABSENT, shopName, fullAddress));
            return false;
        }
        String currentUsername = jwtUtil.getCurrentUserFromJwt(token);
        List<ShopManager> managersDB = shopManagerRepository.findByShopId(shop.getId());
        // Может ли текущий пользователь добавлять менеджеров?
        if (managerExistInList(managersDB, currentUsername)) {
            log.info(String.format("У пользователя [%s] нет права добавлять менеджеров в магазин [%s]", currentUsername, shopName));
            return false;
        }
        // Имеется ли данный менеджер в текущем магазине?
        String managerForAdd = shopManager.getUsername();
        if (!managerExistInList(managersDB, managerForAdd)) {
            log.info(String.format("Пользователь [%s] был добавлен раннее в качестве менеджер в магазин [%s]", managerForAdd, shopName));
            return false;
        }
        shopManager.setShop(shop);
        shopManagerRepository.save(shopManager);
        log.info(String.format("Пользователя [%s] успешно добавлен в качестве менеджера в магазин [%s]", currentUsername, shopName));
        return true;
    }

    public List<ShopManager> getShopManagers(String shopName, String fullAddress){
        Shop shop = shopService.findShopByNameAndFullAddress(shopName, fullAddress);
        if (shop == null) {
            log.info(String.format(SHOP_ABSENT, shopName, fullAddress));
            return new ArrayList<>();
        }
        return shopManagerRepository.findByShopId(shop.getId());
    }

    private boolean managerExistInList(List<ShopManager> shopManagers, String managerName){
        List<ShopManager> managers = shopManagers
                .stream()
                .filter(s -> s.getUsername().equals(managerName))
                .toList();
        return managers.isEmpty();
    }
}
