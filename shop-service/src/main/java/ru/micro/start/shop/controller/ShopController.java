package ru.micro.start.shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
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
    public ResponseEntity<List<Shop>> getAll(){
        return ResponseEntity.ok(service.getAll());
    }

    @PostMapping("/add")
    public ResponseEntity<String> addShop(@RequestBody ShopRequest request){
        if (service.addShop(request.toShop())) {
            return ResponseEntity.ok("Successfully added");
        }
        return new ResponseEntity<String>("Shop already exists", HttpStatus.CONFLICT);
    }

    @GetMapping("/{name}")
    public ResponseEntity<ShopRequest> getShopInfo(@PathVariable String shopName) {
        Shop shop = service.getShopByName(shopName);
        if (shop == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return ResponseEntity.ok(new ShopRequest(shop));
    }
}
