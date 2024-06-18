package cris.noroc.rest.controllers;

import cris.noroc.model.entities.User;
import cris.noroc.model.services.UserDetailsServiceImpl;
import cris.noroc.rest.dtos.SignupRequestDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequestDto signupRequest) {
        if (userDetailsService.findByUsername(signupRequest.getUsername()) != null) {
            return ResponseEntity.badRequest().body("Error: Username is already taken!");
        }

        if (userDetailsService.findByEmail(signupRequest.getEmail()) != null) {
            return ResponseEntity.badRequest().body("Error: Email is already in use!");
        }

        // Creating user's account
        User user = new User();
        user.setUsername(signupRequest.getUsername());
        user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
        user.setFirstName(signupRequest.getFirstName());
        user.setLastName(signupRequest.getLastName());
        user.setEmail(signupRequest.getEmail());
        user.setRole(User.RoleType.USER);

        userDetailsService.createUser(user);

        return ResponseEntity.ok("User registered successfully!");
    }
}
