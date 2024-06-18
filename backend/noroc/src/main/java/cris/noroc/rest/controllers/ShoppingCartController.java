package cris.noroc.rest.controllers;

import cris.noroc.model.entities.ShoppingCart;
import cris.noroc.model.services.ShoppingService;
import cris.noroc.rest.dtos.AddToShoppingCartParamsDto;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("/api/shopping-cart")
public class ShoppingCartController {

    private final ShoppingService shoppingService;


    public ShoppingCartController(ShoppingService shoppingService) {
        this.shoppingService = shoppingService;
    }

    @PostMapping("/{userId}/add/{productId}")
    public ResponseEntity<ShoppingCart> addToCart(@PathVariable Long userId,
                                                  @PathVariable Long productId,
                                                  @RequestBody AddToShoppingCartParamsDto params) {
        ShoppingCart updatedCart = shoppingService.addToShoppingCart(userId, productId, params);
        return ResponseEntity.ok(updatedCart);
    }

    @DeleteMapping("/{userId}/remove/{productId}")
    public ResponseEntity<ShoppingCart> removeFromCart(@PathVariable Long userId,
                                                       @PathVariable Long productId) {
        ShoppingCart updatedCart = shoppingService.removeItemFromCart(userId, productId);
        return ResponseEntity.ok(updatedCart);
    }

    @GetMapping("/{userId}/total-price")
    public ResponseEntity<BigDecimal> getTotalPrice(@PathVariable Long userId) {
        BigDecimal totalPrice = shoppingService.getTotalPrice(userId);
        return ResponseEntity.ok(totalPrice);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<ShoppingCart> getCart(@PathVariable Long userId) {
        if (shoppingService.cartExistsForUser(userId)) {
            return ResponseEntity.ok(shoppingService.getCartForUser(userId));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteCart(@PathVariable Long userId) {
        shoppingService.deleteCartForUser(userId);
        return ResponseEntity.noContent().build();
    }
}
