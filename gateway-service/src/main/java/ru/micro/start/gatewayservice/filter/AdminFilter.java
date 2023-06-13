package ru.micro.start.gatewayservice.filter;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import ru.micro.start.gatewayservice.util.JwtUtil;

@Component
@Slf4j
public class AdminFilter extends AbstractGatewayFilterFactory<AdminFilter.Config> {

    @Autowired
    private RouteValidator validator;
    @Autowired
    private JwtUtil jwtUtil;

    public AdminFilter() {
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        return ((exchange, chain) -> {
            if (validator.isSecured.test(exchange.getRequest())) {
                String authHeader = exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
                if (authHeader != null && authHeader.startsWith("Bearer ")) {
                    authHeader = authHeader.substring(7);
                }
                try {
                    if (!jwtUtil.getClaims(authHeader).get("roles").toString().contains("ADMIN")){
                        String msg = "This is no admin profile";
                        log.error(msg);
                        throw new RuntimeException(msg);
                    }
                } catch (Exception e) {
                    String msg = "Unauthorized access to application";
                    log.error(msg);
                    throw new RuntimeException(msg);
                }
            }
            return chain.filter(exchange);
        });
    }

    public static class Config {

    }
}
