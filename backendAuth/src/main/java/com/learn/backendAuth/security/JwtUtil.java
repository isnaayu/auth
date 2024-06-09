package com.learn.backendAuth.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.learn.backendAuth.entity.AppUser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@Component
@Slf4j
public class JwtUtil {
    @Value("${app.backendAuth.jwt.jwt-secret}")
    private String jwtSecret;

    @Value("${app.backendAuth.jwt.app-name}")
    private String appName;

    @Value("${app.backendAuth.jwt.jwtExpirationInSecond}")
    private Long jwtExpirationInSecond;

    public String generateToken(AppUser appUser) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(jwtSecret.getBytes(StandardCharsets.UTF_8));
            String token = JWT.create()
                    .withIssuer(appName)
                    .withSubject(appUser.getId())
                    .withExpiresAt(Instant.now().plusSeconds(jwtExpirationInSecond))
                    .withIssuedAt(Instant.now())
                    .withClaim("role", appUser.getRole().name())
                    .sign(algorithm);
            log.info("Token generated successfully for user '{}'", appUser.getUsername());
            return token;
        } catch (JWTCreationException e) {
            log.error("Failed to generate token: {}", e.getMessage());
            return null;
        }
    }

    public boolean verifyJwtToken(String token) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(jwtSecret.getBytes(StandardCharsets.UTF_8));
            JWTVerifier verifier = JWT.require(algorithm).build();
            DecodedJWT decodedJWT = verifier.verify(token);
            boolean issuerValid = decodedJWT.getIssuer().equals(appName);
            log.info("Token verification successful");
            return issuerValid;
        } catch (JWTVerificationException e) {
            log.error("Token verification failed: {}", e.getMessage());
            return false;
        }
    }

    public Map<String, String> getUserInfoByToken(String token) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(jwtSecret.getBytes(StandardCharsets.UTF_8));
            JWTVerifier verifier = JWT.require(algorithm).build();
            DecodedJWT decodedJWT = verifier.verify(token);
            Map<String, String> userInfo = new HashMap<>();
            userInfo.put("userId", decodedJWT.getSubject());
            userInfo.put("role", decodedJWT.getClaim("role").asString());
            log.info("User info retrieved successfully from token");
            return userInfo;
        } catch (JWTVerificationException e) {
            log.error("Failed to retrieve user info from token: {}", e.getMessage());
            return null;
        }
    }
}
