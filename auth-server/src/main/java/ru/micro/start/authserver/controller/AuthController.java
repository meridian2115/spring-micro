package ru.micro.start.authserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import ru.micro.start.authserver.dto.AuthRequest;
import ru.micro.start.authserver.model.User;
import ru.micro.start.authserver.service.AuthService;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthService service;
    private final AuthenticationManager authenticationManager;

    @Autowired
    public AuthController(AuthService service, AuthenticationManager authenticationManager) {
        this.service = service;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/register")
    public ResponseEntity addNewUser(@RequestBody AuthRequest request) {
        try{
            String username = request.getUsername();
            Optional<User> user = service.getUser(username);
            if(user.isPresent()) {
                return ResponseEntity.badRequest().build();
            }
            User regUser = new User();
            regUser.setUsername(username);
            regUser.setPassword(request.getPassword());
            service.saveUser(regUser);
            Map<Object, Object> response = new HashMap<>();
            response.put("username", username);
            return ResponseEntity.ok(response);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username or password");
        }
    }

    @PostMapping("/login")
    public ResponseEntity getToken(@RequestBody AuthRequest authRequest) {
        try{
            String username = authRequest.getUsername();
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, authRequest.getPassword()));
            Optional<User> user = service.getUser(username);
            if (user.isEmpty()) {
                throw new UsernameNotFoundException("User with username: " + username + " not found");
            }
            String token = service.generateToken(authRequest.getUsername(), user.get().getRoles());
            Map<Object, Object> response = new HashMap<>();
            response.put("token", token);
            return ResponseEntity.ok(response);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username or password");
        }
    }

    @GetMapping("/validate")
    public ResponseEntity validateToken(@RequestParam("token") String token) {
        boolean isValid = service.validateToken(token);
        Map<Object, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("valid", isValid);
        return ResponseEntity.ok(response);
    }
}
