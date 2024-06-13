package cris.noroc.rest.common;

import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtGeneratorImpl implements JwtGenerator {

    @Value("${noroc.jwt.signKey}")
    private String signKey;

    @Value("${noroc.jwt.expirationMinutes}")
    private long expirationMinutes;

    @Override
    public String generate(JwtInfo info) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + expirationMinutes * 60 * 1000);

        return Jwts.builder()
            .setSubject(info.getUserName())
            .claim("userId", info.getUserId())
            .claim("role", info.getRole())
            .setIssuedAt(now)
            .setExpiration(expiryDate)
            .signWith(Keys.hmacShaKeyFor(signKey.getBytes()), SignatureAlgorithm.HS256)
            .compact();
    }

    @Override
    public JwtInfo getInfo(String token) {
        Claims claims = Jwts.parserBuilder()
            .setSigningKey(Keys.hmacShaKeyFor(signKey.getBytes()))
            .build()
            .parseClaimsJws(token)
            .getBody();

        return new JwtInfo(
            ((Integer) claims.get("userId")).longValue(),
            claims.getSubject(),
            (String) claims.get("role")
        );
    }
}
