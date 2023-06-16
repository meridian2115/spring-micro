package ru.micro.start.shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.micro.start.shop.dto.ShopRequest;
import ru.micro.start.shop.model.Shop;
import ru.micro.start.shop.service.ShopService;

import java.util.List;

@RestController
@RequestMapping("/shop")
public class ShopController {

    @Autowired
    ShopService service;

    @GetMapping("/all")
    public ResponseEntity<List<ShopRequest>> getAll(){
        List<ShopRequest> result = service.getAll().stream().map(ShopRequest::new).toList();
        return ResponseEntity.ok(result);
    }

    @PostMapping("/add")
    public ResponseEntity<String> addShop(@RequestHeader(HttpHeaders.AUTHORIZATION) String token, @RequestBody ShopRequest request){
        if (service.addShop(token, request.toShop())) {
            return ResponseEntity.ok("Successfully added");
        }
        return new ResponseEntity<String>("Shop already exists", HttpStatus.CONFLICT);
    }

    @GetMapping("/{name}")
    public ResponseEntity<List<ShopRequest>> getShopInfo(@PathVariable String shopName) {
        List<Shop> shop = service.getShopByName(shopName);
        if (shop.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        List<ShopRequest> result = shop.stream().map(ShopRequest::new).toList();
        return ResponseEntity.ok(result);
    }
}
