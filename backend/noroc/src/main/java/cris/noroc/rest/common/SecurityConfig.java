package cris.noroc.rest.common;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private JwtGenerator jwtGenerator;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.cors().and()
            .csrf().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
            .addFilterBefore(new JwtFilter(jwtGenerator), UsernamePasswordAuthenticationFilter.class)
            .authorizeRequests()
            .requestMatchers(HttpMethod.POST, "/users/signUp").permitAll()
            .requestMatchers(HttpMethod.POST, "/users/login").permitAll()
            .requestMatchers(HttpMethod.POST, "/users/loginFromServiceToken").permitAll()
            .requestMatchers(HttpMethod.GET, "/catalog/categories").permitAll()
            .requestMatchers(HttpMethod.GET, "/catalog/products/*").permitAll()
            .requestMatchers(HttpMethod.GET, "/catalog/products").permitAll()
            .requestMatchers(HttpMethod.GET, "/api/newly-added-products").permitAll()
            .requestMatchers(HttpMethod.PUT, "/users/*").hasRole("USER")
            .requestMatchers(HttpMethod.POST, "/users/*/changePassword").hasRole("USER")
            .requestMatchers(HttpMethod.POST, "/shopping/shoppingcarts/*/addToShoppingCart").hasRole("USER")
            .requestMatchers(HttpMethod.POST, "/shopping/shoppingcarts/*/updateShoppingCartItemQuantity").hasRole("USER")
            .requestMatchers(HttpMethod.POST, "/shopping/shoppingcarts/*/removeShoppingCartItem").hasRole("USER")
            .requestMatchers(HttpMethod.POST, "/shopping/shoppingcarts/*/buy").hasRole("USER")
            .requestMatchers(HttpMethod.GET, "/shopping/orders/*").hasRole("USER")
            .requestMatchers(HttpMethod.GET, "/shopping/orders").hasRole("USER")
            .anyRequest().denyAll();

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(Arrays.asList("http://localhost:5173")); // Allow only this origin
        config.setAllowCredentials(true); // Allow credentials (cookies, authorization headers, etc.)
        config.addAllowedHeader("*"); // Allow all headers
        config.addAllowedMethod("*"); // Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config); // Apply this configuration to all paths

        return source;
    }
}
