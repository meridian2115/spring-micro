package ru.micro.start.shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.micro.start.shop.dto.ShopManagerRequest;
import ru.micro.start.shop.dto.ShopRequest;
import ru.micro.start.shop.model.ShopManager;
import ru.micro.start.shop.service.ShopManagerService;

import java.util.List;

@RestController
@RequestMapping("/shop/manager")
public class ShopManagerController {

    @Autowired
    ShopManagerService service;

    @PostMapping("/add")
    public ResponseEntity<String> addManagerToShop(@RequestHeader(HttpHeaders.AUTHORIZATION) String token, @RequestBody ShopManagerRequest request){
        if (service.addManagerToShop(token, request.toShopManager())){
            return ResponseEntity.ok("Manager successfully added");
        }
        return new ResponseEntity<String>("Manager already exists or unknown shop", HttpStatus.CONFLICT);
    }

    @GetMapping("/view")
    public ResponseEntity<List<String>> viewManagersInShop(@RequestBody ShopRequest request){
        List<String> shopManagers = service.getShopManagers(request.getName(), request.getAddress())
                .stream()
                .map(ShopManager::getUsername)
                .toList();
        return ResponseEntity.ok(shopManagers);
    }
}
