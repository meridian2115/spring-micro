package ru.micro.start.shop.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.micro.start.shop.model.ShopManager;
import ru.micro.start.shop.model.Status;
import ru.micro.start.shop.model.VisitTask;
import ru.micro.start.shop.repository.VisitTaskRepository;
import ru.micro.start.shop.service.ShopManagerService;
import ru.micro.start.shop.service.ShopService;
import ru.micro.start.shop.service.VisitService;
import ru.micro.start.shop.util.JwtUtil;

import java.util.List;

@Service
@Slf4j
public class VisitServiceImpl implements VisitService {

    @Autowired
    JwtUtil jwtUtil;

    @Autowired
    VisitTaskRepository repository;

    @Autowired
    ShopManagerService shopManagerService;

    @Autowired
    ShopService shopService;

    @Override
    public boolean addVisitTask(String token, VisitTask visitTask) {
        String currentUsername = jwtUtil.getCurrentUserFromJwt(token);
        String shopName = visitTask.getShop().getName();
        String shopAddress = visitTask.getShop().getAddress().getFullAddress();
        List<ShopManager> managers = shopManagerService
                .getShopManagers(shopName, shopAddress)
                .stream()
                .filter(manager -> manager.getUsername().equals(currentUsername))
                .toList();
        if (managers.isEmpty()) {
            log.info(String.format("Пользователь [%s] не является менеджером магазина [%s]", currentUsername, shopName));
            return false;
        }
        visitTask.setCreatedBy(currentUsername);
        visitTask.setShop(shopService.findShopByNameAndFullAddress(shopName, shopAddress));
        visitTask.setStatus(Status.CREATED);
        repository.save(visitTask);
        return true;
    }

    @Override
    public List<VisitTask> getUserTasks(String token) {
        String currentUsername = jwtUtil.getCurrentUserFromJwt(token);
        return repository.findByUsernameOrCreatedBy(currentUsername, currentUsername);
    }
}
