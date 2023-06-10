package ru.micro.start.authserver.service.impl;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import ru.micro.start.authserver.model.Role;
import ru.micro.start.authserver.service.JwtService;

import java.security.Key;
import java.util.*;

@Component
@RefreshScope
public class JwtServiceImpl implements JwtService {

    @Autowired
    Environment env;
    private final String secret;
    private final long validityInMilliseconds;

    public JwtServiceImpl(Environment env) {
        this.env = env;
        this.secret = env.getProperty("jwt.token.secret");
        this.validityInMilliseconds = Long.parseLong(env.getProperty("jwt.token.expired"));
    }

    public boolean validateToken(final String token) {
        try{
            Jwts.parserBuilder().setSigningKey(getSignKey()).build().parseClaimsJws(token);
            return true;
        } catch (SignatureException ex) {
            return false;
        }
    }


    public String generateToken(String userName, List<Role> roles) {
        return createToken(userName, roles);
    }

    private String createToken(String userName, List<Role> roles) {
        Claims claims = Jwts.claims().setSubject(userName);
        claims.put("roles", getRoleNames(roles));
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userName)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + validityInMilliseconds))
                .signWith(getSignKey(), SignatureAlgorithm.HS256).compact();
    }

    private Key getSignKey() {
        byte[] keyBytes = Decoders.BASE64.decode(secret);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    private List<String> getRoleNames(List<Role> userRoles) {
        List<String> result = new ArrayList<>();

        userRoles.forEach(role -> {
            result.add(role.getName());
        });

        return result;
    }
}
