package cris.noroc.rest.dtos;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import cris.noroc.model.entities.ShoppingCart;
import cris.noroc.model.entities.ShoppingCartItem;

public class ShoppingCartConversor {
	
	private ShoppingCartConversor() {}
	
	public static ShoppingCartDto toShoppingCartDto(ShoppingCart cart) {
		
		List<ShoppingCartItemDto> items = 
			cart.getItems().stream().map(ShoppingCartConversor::toShoppingCartItemDto).collect(Collectors.toList());
		
		items.sort(Comparator.comparing(ShoppingCartItemDto::getProductName));
		
		return new ShoppingCartDto(cart.getId(), items, cart.getTotalQuantity(), cart.getTotalPrice());
		
	}
	
	private static ShoppingCartItemDto toShoppingCartItemDto(ShoppingCartItem item) {
		
		return new ShoppingCartItemDto(
            item.getProduct().getId(), 
            item.getProduct().getName(),
            item.getProduct().getCategory().getId(), 
            item.getProduct().getPrice(), 
            item.getQuantity()
        );
	}

}
