package ru.micro.start.userservice.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.micro.start.userservice.model.User;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(NON_NULL)
public class UserInfo {
    private String username;
    private String firstName;
    private String lastName;
    private String email;

    public User toUser(){
        User user = new User();
        user.setUsername(this.username);
        user.setFirstName(this.firstName);
        user.setLastName(this.lastName);
        user.setEmail(this.email);
        return user;
    }
}
