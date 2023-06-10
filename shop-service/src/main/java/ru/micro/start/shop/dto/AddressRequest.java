package ru.micro.start.shop.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.micro.start.shop.model.Address;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddressRequest {
    private String fullAddress;

    public Address toAddress(){
        Address address = new Address();
        address.setFullAddress(this.fullAddress);
        return address;
    }
}
