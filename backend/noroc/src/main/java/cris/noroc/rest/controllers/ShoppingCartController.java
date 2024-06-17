package cris.noroc.rest.controllers;

import cris.noroc.model.services.ShoppingService;
import cris.noroc.rest.dtos.AddToShoppingCartParamsDto;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import cris.noroc.model.exceptions.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/shopping-cart")
public class ShoppingCartController {

    @Autowired
    private ShoppingService shoppingService;

    @PostMapping("/{userId}/{shoppingCartId}/add")
    public void addToShoppingCart(@PathVariable Long userId, @PathVariable Long shoppingCartId,
                                  @RequestParam @NotNull Long productId, @RequestParam @Min(1) int quantity)
            throws InstanceNotFoundException, PermissionException, MaxQuantityExceededException, MaxItemsExceededException {

        AddToShoppingCartParamsDto params = new AddToShoppingCartParamsDto(productId, quantity);
        shoppingService.addToShoppingCart(userId, shoppingCartId, params);
    }
}
