package ru.micro.start.shop.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.micro.start.shop.model.Shop;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ShopRequest {
    private String name;
    private String address;

    public ShopRequest(Shop shop){
        this.name = shop.getName();
        this.address = shop.getAddress().getFullAddress();
    }

    public Shop toShop(){
        Shop shop = new Shop();
        shop.setName(this.name);
        AddressRequest addressRequest = new AddressRequest(address);
        shop.setAddress(addressRequest.toAddress());
        return shop;
    }
}
