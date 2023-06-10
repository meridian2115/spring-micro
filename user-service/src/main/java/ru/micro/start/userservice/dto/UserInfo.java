package ru.micro.start.userservice.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.micro.start.userservice.model.Role;
import ru.micro.start.userservice.model.User;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(NON_NULL)
public class UserInfo implements Serializable {
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private Date created;
    private Date updated;
    private List<String> roles;

    public UserInfo (User user) {
        this.username = user.getUsername();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.email = user.getEmail();
        this.created = user.getCreated();
        this.updated = user.getUpdated();
        this.roles = user.getRoles().stream().map(Role::getName).collect(Collectors.toList());
    }

    public User toUser(){
        User user = new User();
        user.setUsername(this.username);
        user.setFirstName(this.firstName);
        user.setLastName(this.lastName);
        user.setEmail(this.email);
        return user;
    }
}
