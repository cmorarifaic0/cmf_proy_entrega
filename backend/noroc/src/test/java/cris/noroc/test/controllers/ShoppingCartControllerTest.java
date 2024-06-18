package cris.noroc.test.controllers;

import cris.noroc.model.entities.ShoppingCart;
import cris.noroc.model.services.ShoppingService;
import cris.noroc.rest.dtos.AddToShoppingCartParamsDto;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.math.BigDecimal;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import cris.noroc.rest.controllers.ShoppingCartController;

public class ShoppingCartControllerTest {

    @Mock
    private ShoppingService shoppingService;

    @InjectMocks
    private ShoppingCartController shoppingCartController;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(shoppingCartController).build();
    }

    @Test
    void addToCart() throws Exception {
        ShoppingCart shoppingCart = new ShoppingCart();
        when(shoppingService.addToShoppingCart(any(Long.class), any(Long.class), any(AddToShoppingCartParamsDto.class)))
                .thenReturn(shoppingCart);

        mockMvc.perform(post("/api/shopping-cart/1/add/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"quantity\":1}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").exists());
    }

    @Test
    void removeFromCart() throws Exception {
        ShoppingCart shoppingCart = new ShoppingCart();
        when(shoppingService.removeItemFromCart(any(Long.class), any(Long.class)))
                .thenReturn(shoppingCart);

        mockMvc.perform(delete("/api/shopping-cart/1/remove/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").exists());
    }

    @Test
    void getTotalPrice() throws Exception {
        when(shoppingService.getTotalPrice(any(Long.class)))
                .thenReturn(new BigDecimal("100.00"));

        mockMvc.perform(get("/api/shopping-cart/1/total-price"))
                .andExpect(status().isOk())
                .andExpect(content().string("100.00"));
    }

    @Test
    void getCart() throws Exception {
        ShoppingCart shoppingCart = new ShoppingCart();
        when(shoppingService.getCartForUser(any(Long.class)))
                .thenReturn(shoppingCart);
        when(shoppingService.cartExistsForUser(any(Long.class)))
                .thenReturn(true);

        mockMvc.perform(get("/api/shopping-cart/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").exists());
    }

    @Test
    void deleteCart() throws Exception {
        mockMvc.perform(delete("/api/shopping-cart/1"))
                .andExpect(status().isNoContent());
    }
}
