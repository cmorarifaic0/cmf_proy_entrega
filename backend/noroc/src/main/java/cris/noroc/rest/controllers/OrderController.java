package cris.noroc.rest.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import cris.noroc.model.entities.Order;
import cris.noroc.model.repositories.OrderRepository;
import cris.noroc.model.exceptions.ResourceNotFoundException;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @GetMapping("/{id}")
    public Order getOrderById(@PathVariable Long id) {
        return orderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found"));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Order createOrder(@RequestBody Order order) {
        // Validate order items count
        if (order.getItems().size() > Order.MAX_ITEMS) {
            throw new IllegalArgumentException("Order cannot have more than " + Order.MAX_ITEMS + " items.");
        }
        return orderRepository.save(order);
    }

    @PutMapping("/{id}")
    public Order updateOrder(@PathVariable Long id, @RequestBody Order updatedOrder) {
        return orderRepository.findById(id)
                .map(order -> {
                    order.setDate(updatedOrder.getDate());
                    order.setPostalAddress(updatedOrder.getPostalAddress());
                    order.setPostalCode(updatedOrder.getPostalCode());
                    order.setItems(updatedOrder.getItems());
                    return orderRepository.save(order);
                })
                .orElseThrow(() -> new ResourceNotFoundException("Order not found"));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteOrder(@PathVariable Long id) {
        orderRepository.findById(id)
                .map(order -> {
                    orderRepository.delete(order);
                    return order;
                })
                .orElseThrow(() -> new ResourceNotFoundException("Order not found"));
    }
}
