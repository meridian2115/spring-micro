package ru.micro.start.shop.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.micro.start.shop.model.ShopManager;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ShopManagerRequest {
    private ShopRequest shop;
    private String username;

    public ShopManager toShopManager(){
        ShopManager shopManager = new ShopManager();
        shopManager.setShop(shop.toShop());
        shopManager.setUsername(this.username);
        return shopManager;
    }
}
