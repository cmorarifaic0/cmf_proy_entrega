package cris.noroc.test.model.services;

import cris.noroc.model.entities.Category;
import cris.noroc.model.entities.Product;
import cris.noroc.model.entities.ShoppingCart;
import cris.noroc.model.entities.ShoppingCartItem;
import cris.noroc.model.entities.User;
import cris.noroc.model.services.ShoppingService;
import cris.noroc.model.repositories.ProductRepository;
import cris.noroc.model.repositories.ShoppingCartRepository;
import cris.noroc.model.repositories.UserRepository;
import cris.noroc.rest.dtos.AddToShoppingCartParamsDto;

import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.Test;

public class ShoppingServiceTest {

    @Mock
    private ShoppingCartRepository shoppingCartRepository;

    @Mock
    private ProductRepository productRepository;

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private ShoppingService shoppingService;

    private User user;
    private Product product;
    private ShoppingCart shoppingCart;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);

        user = new User("testUser", "password", "firstName", "lastName", "email@example.com", User.RoleType.USER);
        user.setId(1L);

        Category category = new Category("Test Category");

        product = new Product(null, "product", "description", new BigDecimal("10.5"), null, LocalDateTime.now());
        product.setCategory(category);
        product.setId(1L);

        shoppingCart = new ShoppingCart(user);
        ShoppingCartItem item = new ShoppingCartItem(product, shoppingCart, 2);
        shoppingCart.addItem(item);
    }

    @Test
    public void testCreateShoppingCart() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(shoppingCartRepository.save(any(ShoppingCart.class))).thenReturn(shoppingCart);

        ShoppingCart createdCart = shoppingService.createShoppingCart(user);

        assertNotNull(createdCart);
        assertEquals(user, createdCart.getUser());
        verify(shoppingCartRepository, times(1)).save(any(ShoppingCart.class));
    }

    @Test
    public void testAddItemToCart() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(productRepository.findById(1L)).thenReturn(Optional.of(product));
        when(shoppingCartRepository.findByUser(user)).thenReturn(Optional.of(shoppingCart));
        when(shoppingCartRepository.save(any(ShoppingCart.class))).thenReturn(shoppingCart);

        ShoppingCart updatedCart = shoppingService.addItemToCart(1L, 1L, 1);

        assertNotNull(updatedCart);
        assertEquals(1, updatedCart.getItems().size());
        assertEquals(3, updatedCart.getItems().iterator().next().getQuantity());
        verify(shoppingCartRepository, times(1)).save(any(ShoppingCart.class));
    }

    @Test
    public void testAddToShoppingCart() {
        AddToShoppingCartParamsDto params = new AddToShoppingCartParamsDto(1);

        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(productRepository.findById(1L)).thenReturn(Optional.of(product));
        when(shoppingCartRepository.findByUser(user)).thenReturn(Optional.of(shoppingCart));
        when(shoppingCartRepository.save(any(ShoppingCart.class))).thenReturn(shoppingCart);

        ShoppingCart updatedCart = shoppingService.addToShoppingCart(1L, 1L, params);

        assertNotNull(updatedCart);
        assertEquals(1, updatedCart.getItems().size());
        assertEquals(3, updatedCart.getItems().iterator().next().getQuantity());
        verify(shoppingCartRepository, times(1)).save(any(ShoppingCart.class));
    }

    @Test
    public void testRemoveItemFromCart() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(shoppingCartRepository.findByUser(user)).thenReturn(Optional.of(shoppingCart));
        when(shoppingCartRepository.save(any(ShoppingCart.class))).thenReturn(shoppingCart);

        ShoppingCart updatedCart = shoppingService.removeItemFromCart(1L, 1L);

        assertNotNull(updatedCart);
        assertTrue(updatedCart.isEmpty());
        verify(shoppingCartRepository, times(1)).save(any(ShoppingCart.class));
    }

    @Test
    public void testGetTotalPrice() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(shoppingCartRepository.findByUser(user)).thenReturn(Optional.of(shoppingCart));

        BigDecimal totalPrice = shoppingService.getTotalPrice(1L);

        assertNotNull(totalPrice);
        assertEquals(new BigDecimal("21.00").setScale(2, BigDecimal.ROUND_HALF_UP), totalPrice);
    }

    @Test
    public void testGetTotalPrice_UserNotFound() {
        when(userRepository.findById(1L)).thenReturn(Optional.empty());

        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            shoppingService.getTotalPrice(1L);
        });

        assertEquals("User not found", exception.getMessage());
    }

    @Test
    public void testAddItemToCart_ProductNotFound() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(productRepository.findById(1L)).thenReturn(Optional.empty());

        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            shoppingService.addItemToCart(1L, 1L, 1);
        });

        assertEquals("User or Product not found", exception.getMessage());
    }

    @Test
    public void testRemoveItemFromCart_ProductNotInCart() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(shoppingCartRepository.findByUser(user)).thenReturn(Optional.of(shoppingCart));

        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            shoppingService.removeItemFromCart(1L, 2L);
        });

        assertEquals("Product not found in cart", exception.getMessage());
    }

    @Test
    public void testCartExistsForUser() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(shoppingCartRepository.existsByUser(user)).thenReturn(true);

        boolean exists = shoppingService.cartExistsForUser(1L);

        assertTrue(exists);
        verify(shoppingCartRepository, times(1)).existsByUser(user);
    }

    @Test
    public void testDeleteCartForUser() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));

        shoppingService.deleteCartForUser(1L);

        verify(shoppingCartRepository, times(1)).deleteByUser(user);
    }

    @Test
    public void testDeleteCartForUser_UserNotFound() {
        when(userRepository.findById(1L)).thenReturn(Optional.empty());

        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            shoppingService.deleteCartForUser(1L);
        });

        assertEquals("User not found", exception.getMessage());
    }
}
