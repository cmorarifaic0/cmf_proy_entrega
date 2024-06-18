package cris.noroc.test.model.services;

import static org.junit.jupiter.api.Assertions.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import cris.noroc.model.entities.Category;
import cris.noroc.model.entities.Product;
import cris.noroc.model.entities.ShoppingCart;
import cris.noroc.model.entities.ShoppingCartItem;
import cris.noroc.model.entities.User;

public class ShoppingCartTest {

    private ShoppingCart shoppingCart;
    private User user;
    private Product product1;
    private Product product2;

    @BeforeEach
    public void setup() {
        user = new User("testUser", "password", "firstName", "lastName", "email@example.com", User.RoleType.USER);
        shoppingCart = new ShoppingCart(user);

        Category category = new Category("Test Category");

        product1 = new Product(null, "product1", "description1", new BigDecimal("10.5"), null, LocalDateTime.now());
        product1.setCategory(category);

        product2 = new Product(null, "product2", "description2", new BigDecimal("15.3"), null, LocalDateTime.now());
        product2.setCategory(category);
    }

    @Test
    public void testAddItem() {
        ShoppingCartItem item1 = new ShoppingCartItem(product1, shoppingCart, 2);
        shoppingCart.addItem(item1);

        assertEquals(1, shoppingCart.getItems().size());
        assertTrue(shoppingCart.getItems().contains(item1));
        assertEquals(shoppingCart, item1.getShoppingCart());
    }

    @Test
    public void testRemoveItem() {
        ShoppingCartItem item1 = new ShoppingCartItem(product1, shoppingCart, 2);
        shoppingCart.addItem(item1);

        shoppingCart.removeItem(item1);

        assertEquals(0, shoppingCart.getItems().size());
        assertFalse(shoppingCart.getItems().contains(item1));
        assertNull(item1.getShoppingCart());
    }

    @Test
    public void testGetTotalQuantity() {
        ShoppingCartItem item1 = new ShoppingCartItem(product1, shoppingCart, 2);
        ShoppingCartItem item2 = new ShoppingCartItem(product2, shoppingCart, 3);
        shoppingCart.addItem(item1);
        shoppingCart.addItem(item2);

        assertEquals(5, shoppingCart.getTotalQuantity());
    }

    @Test
    public void testGetTotalPrice() {
        ShoppingCartItem item1 = new ShoppingCartItem(product1, shoppingCart, 2);
        ShoppingCartItem item2 = new ShoppingCartItem(product2, shoppingCart, 3);
        shoppingCart.addItem(item1);
        shoppingCart.addItem(item2);

        BigDecimal expectedTotalPrice = product1.getPrice().multiply(BigDecimal.valueOf(2))
                .add(product2.getPrice().multiply(BigDecimal.valueOf(3)))
                .setScale(2, BigDecimal.ROUND_HALF_UP);

        assertEquals(expectedTotalPrice, shoppingCart.getTotalPrice());
    }

    @Test
    public void testRemoveAll() {
        ShoppingCartItem item1 = new ShoppingCartItem(product1, shoppingCart, 2);
        ShoppingCartItem item2 = new ShoppingCartItem(product2, shoppingCart, 3);
        shoppingCart.addItem(item1);
        shoppingCart.addItem(item2);

        shoppingCart.removeAll();

        assertEquals(0, shoppingCart.getItems().size());
        assertTrue(shoppingCart.isEmpty());
        assertNull(item1.getShoppingCart());
        assertNull(item2.getShoppingCart());
    }

    @Test
    public void testGetItem() {
        ShoppingCartItem item1 = new ShoppingCartItem(product1, shoppingCart, 2);
        shoppingCart.addItem(item1);

        assertTrue(shoppingCart.getItem(product1.getId()).isPresent());
        assertEquals(item1, shoppingCart.getItem(product1.getId()).get());
    }
}
