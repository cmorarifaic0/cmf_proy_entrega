package cris.noroc.test.model.services;


import cris.noroc.model.entities.User;
import cris.noroc.model.services.UserDetailsService;
import cris.noroc.model.services.UserDetailsServiceImpl;
import cris.noroc.model.exceptions.ResourceNotFoundException;
import cris.noroc.model.repositories.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private BCryptPasswordEncoder passwordEncoder;

    @InjectMocks
    private UserDetailsServiceImpl userService;

    private User user;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);

        user = new User("testUser", "password", "firstName", "lastName", "email@example.com", User.RoleType.USER);
        user.setId(1L);
    }

    @Test
    public void testCreateUser() {
        when(passwordEncoder.encode(any(String.class))).thenReturn("encodedPassword");
        when(userRepository.save(any(User.class))).thenReturn(user);

        User createdUser = userService.createUser(user);

        assertNotNull(createdUser);
        assertEquals("encodedPassword", createdUser.getPassword());
        verify(userRepository, times(1)).save(any(User.class));
    }

    @Test
    public void testUpdateUser() {
        User updatedUser = new User("updatedUser", "newPassword", "newFirstName", "newLastName", "newEmail@example.com", User.RoleType.ADMIN);
        updatedUser.setId(1L);

        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(passwordEncoder.encode(any(String.class))).thenReturn("encodedPassword");
        when(userRepository.save(any(User.class))).thenReturn(updatedUser);

        User result = userService.updateUser(1L, updatedUser);

        assertNotNull(result);
        assertEquals("encodedPassword", result.getPassword());
        assertEquals("updatedUser", result.getUserName());
        assertEquals("newFirstName", result.getFirstName());
        assertEquals("newLastName", result.getLastName());
        assertEquals("newEmail@example.com", result.getEmail());
        assertEquals(User.RoleType.ADMIN, result.getRole());
        verify(userRepository, times(1)).findById(1L);
        verify(userRepository, times(1)).save(any(User.class));
    }

    @Test
    public void testUpdateUserNotFound() {
        when(userRepository.findById(1L)).thenReturn(Optional.empty());

        User updatedUser = new User("updatedUser", "newPassword", "newFirstName", "newLastName", "newEmail@example.com", User.RoleType.ADMIN);

        assertThrows(ResourceNotFoundException.class, () -> {
            userService.updateUser(1L, updatedUser);
        });

        verify(userRepository, times(1)).findById(1L);
        verify(userRepository, times(0)).save(any(User.class));
    }

    @Test
    public void testFindByUsername() {
        when(userRepository.findByUserName("testUser")).thenReturn(Optional.of(user));

        User foundUser = userService.findByUsername("testUser");

        assertNotNull(foundUser);
        assertEquals("testUser", foundUser.getUserName());
        verify(userRepository, times(1)).findByUserName("testUser");
    }

    @Test
    public void testFindByUsernameNotFound() {
        when(userRepository.findByUserName("testUser")).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () -> {
            userService.findByUsername("testUser");
        });

        verify(userRepository, times(1)).findByUserName("testUser");
    }
}
