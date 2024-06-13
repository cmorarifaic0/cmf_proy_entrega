package cris.noroc.model.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import cris.noroc.model.entities.Order;
import cris.noroc.model.repositories.OrderRepository;
import cris.noroc.model.entities.ShoppingCart;
import cris.noroc.model.repositories.ShoppingCartRepository;
import cris.noroc.model.exceptions.InstanceNotFoundException;
import cris.noroc.model.exceptions.PermissionException;

@Component
public class PermissionChecker {

    @Autowired
    private ShoppingCartRepository shoppingCartRepository;

    @Autowired
    private OrderRepository orderRepository;

    public ShoppingCart checkShoppingCartExistsAndBelongsTo(Long shoppingCartId, Long userId)
            throws InstanceNotFoundException, PermissionException {
        return shoppingCartRepository.findById(shoppingCartId)
                .filter(cart -> cart.getUser().getId().equals(userId))
                .orElseThrow(() -> new PermissionException("User does not have permission to access this shopping cart"));
    }

    public Order checkOrderExistsAndBelongsTo(Long orderId, Long userId)
            throws InstanceNotFoundException, PermissionException {
        return orderRepository.findById(orderId)
                .filter(order -> order.getUser().getId().equals(userId))
                .orElseThrow(() -> new PermissionException("User does not have permission to access this order"));
    }
}
