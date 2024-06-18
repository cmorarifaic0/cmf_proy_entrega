package cris.noroc.test.model.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import org.junit.jupiter.api.Test;

import cris.noroc.model.entities.Category;
import cris.noroc.model.entities.Order;
import cris.noroc.model.entities.OrderItem;
import cris.noroc.model.entities.Product;
import cris.noroc.model.entities.User;

public class OrderTest {

    private Product createProduct(String name, BigDecimal price) {
        Category category = new Category("Test Category");
        return new Product(null, name, "description", price, null, LocalDateTime.now());
    }

    @Test
    public void testGetTotalPrice() {

        Product product1 = createProduct("product1", new BigDecimal("10.5"));
        Product product2 = createProduct("product2", new BigDecimal("15.3"));

        User user = new User("testUser", "password", "firstName", "lastName", "email@example.com", User.RoleType.USER);

        Order order = new Order(user, LocalDateTime.now(), "123 Test St", "12345");

        BigDecimal price1 = product1.getPrice().add(new BigDecimal(1));
        int quantity1 = 1;
        OrderItem item1 = new OrderItem(product1, price1, quantity1);

        BigDecimal price2 = product2.getPrice().add(new BigDecimal(1));
        int quantity2 = 2;
        OrderItem item2 = new OrderItem(product2, price2, quantity2);

        order.addItem(item1);
        order.addItem(item2);

        BigDecimal totalPrice = price1.multiply(new BigDecimal(quantity1))
                .add(price2.multiply(new BigDecimal(quantity2)));

        assertEquals(totalPrice.setScale(2, BigDecimal.ROUND_HALF_EVEN), order.getTotalPrice());
    }
}
