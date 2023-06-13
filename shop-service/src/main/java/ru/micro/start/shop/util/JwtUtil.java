package ru.micro.start.shop.util;

import org.json.JSONObject;
import org.springframework.stereotype.Component;

import java.util.Base64;

@Component
public class JwtUtil {
    public JSONObject getTokenBody(final String token) {
        String[] parts = token.split("\\.");
        return new JSONObject(decode(parts[1]));
    }

    public String getCurrentUserFromJwt(String token) {
        return getTokenBody(token).get("sub").toString();
    }

    private static String decode(String encodedString) {
        return new String(Base64.getUrlDecoder().decode(encodedString));
    }
}
