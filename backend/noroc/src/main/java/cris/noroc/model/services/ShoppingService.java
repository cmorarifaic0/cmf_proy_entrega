package cris.noroc.model.services;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cris.noroc.model.entities.*;
import cris.noroc.model.exceptions.*;
import cris.noroc.model.repositories.*;
import cris.noroc.rest.dtos.AddToShoppingCartParamsDto;

@Service
@Transactional
public class ShoppingService {

    private static final int MAX_QUANTITY = 100;  // Example maximum quantity

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ShoppingCartItemRepository shoppingCartItemRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ShoppingCartRepository shoppingCartRepository;

    public ShoppingCart addToShoppingCart(Long userId, Long shoppingCartId, AddToShoppingCartParamsDto params)
            throws InstanceNotFoundException, MaxQuantityExceededException {

        Optional<Product> product = productRepository.findById(params.getProductId());

        if (!product.isPresent()) {
            throw new InstanceNotFoundException("project.entities.product", params.getProductId());
        }

        ShoppingCart shoppingCart = getShoppingCartById(shoppingCartId);

        Optional<ShoppingCartItem> existingCartItem = shoppingCart.getItem(params.getProductId());

        if (existingCartItem.isPresent()) {
            int newQuantity = existingCartItem.get().getQuantity() + params.getQuantity();
            if (newQuantity > MAX_QUANTITY) {
                throw new MaxQuantityExceededException(MAX_QUANTITY - existingCartItem.get().getQuantity());
            }
            existingCartItem.get().incrementQuantity(params.getQuantity());
        } else {
            if (params.getQuantity() > MAX_QUANTITY) {
                throw new MaxQuantityExceededException(MAX_QUANTITY);
            }
            ShoppingCartItem newCartItem = new ShoppingCartItem(product.get(), shoppingCart, params.getQuantity());
            shoppingCart.addItem(newCartItem);
            shoppingCartItemRepository.save(newCartItem);
        }

        return shoppingCart;
    }

    public ShoppingCart updateShoppingCartItemQuantity(Long userId, Long shoppingCartId, Long productId, int quantity)
            throws InstanceNotFoundException, MaxQuantityExceededException {
        
        ShoppingCart shoppingCart = getShoppingCartById(shoppingCartId);
        Optional<ShoppingCartItem> existingCartItem = shoppingCart.getItem(productId);

        if (!existingCartItem.isPresent()) {
            throw new InstanceNotFoundException("project.entities.product", productId);
        }

        if (quantity > MAX_QUANTITY) {
            throw new MaxQuantityExceededException(MAX_QUANTITY);
        }

        existingCartItem.get().setQuantity(quantity);

        return shoppingCart;
    }

    public ShoppingCart removeShoppingCartItem(Long userId, Long shoppingCartId, Long productId)
            throws InstanceNotFoundException {
        
        ShoppingCart shoppingCart = getShoppingCartById(shoppingCartId);
        Optional<ShoppingCartItem> existingCartItem = shoppingCart.getItem(productId);

        if (!existingCartItem.isPresent()) {
            throw new InstanceNotFoundException("project.entities.product", productId);
        }

        shoppingCart.removeItem(existingCartItem.get());
        shoppingCartItemRepository.delete(existingCartItem.get());

        return shoppingCart;
    }

    public Order buy(Long userId, Long shoppingCartId, String postalAddress, String postalCode)
            throws InstanceNotFoundException, EmptyShoppingCartException {

        ShoppingCart shoppingCart = getShoppingCartById(shoppingCartId);

        if (shoppingCart.isEmpty()) {
            throw new EmptyShoppingCartException();
        }

        Order order = new Order(shoppingCart.getUser(), LocalDateTime.now(), postalAddress, postalCode);

        orderRepository.save(order);

        for (ShoppingCartItem shoppingCartItem : shoppingCart.getItems()) {
            OrderItem orderItem = new OrderItem(shoppingCartItem.getProduct(),
                    shoppingCartItem.getProduct().getPrice(), shoppingCartItem.getQuantity());

            order.addItem(orderItem);
            orderItemRepository.save(orderItem);
            shoppingCartItemRepository.delete(shoppingCartItem);
        }

        shoppingCart.removeAll();

        return order;
    }

    @Transactional(readOnly = true)
    public Order findOrder(Long userId, Long orderId) throws InstanceNotFoundException {
        return checkOrderExistsAndBelongsTo(orderId, userId);
    }

    @Transactional(readOnly = true)
    public Block<Order> findOrders(Long userId, int page, int size) {
        Slice<Order> slice = orderRepository.findByUserIdOrderByDateDesc(userId, PageRequest.of(page, size));
        return new Block<>(slice.getContent(), slice.hasNext());
    }

    private ShoppingCart getShoppingCartById(Long shoppingCartId) throws InstanceNotFoundException {
        return shoppingCartRepository.findById(shoppingCartId)
                .orElseThrow(() -> new InstanceNotFoundException("project.entities.shoppingCart", shoppingCartId));
    }

    private Order checkOrderExistsAndBelongsTo(Long orderId, Long userId) throws InstanceNotFoundException {
        return orderRepository.findByIdAndUserId(orderId, userId)
                .orElseThrow(() -> new InstanceNotFoundException("project.entities.order", orderId));
    }
}
