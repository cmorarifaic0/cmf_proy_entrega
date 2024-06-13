package cris.noroc.model.entities;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Optional;
import java.util.Set;
import java.util.HashSet;
import jakarta.persistence.*;

@Entity
@Table(name = "ShoppingCart")
public class ShoppingCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(optional = false)
    private User user;

    @OneToMany(mappedBy = "shoppingCart", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<ShoppingCartItem> items = new HashSet<>();

    public ShoppingCart() {}

    public ShoppingCart(User user) {
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<ShoppingCartItem> getItems() {
        return items;
    }

    public void setItems(Set<ShoppingCartItem> items) {
        this.items = items;
    }

    public boolean isEmpty() {
        return items.isEmpty();
    }

    public void addItem(ShoppingCartItem item) {
        items.add(item);
        item.setShoppingCart(this);
    }

    public void removeItem(ShoppingCartItem item) {
        items.remove(item);
        item.setShoppingCart(null);
    }

    public void removeAll() {
        items.forEach(item -> item.setShoppingCart(null));
        items.clear();
    }

    public Optional<ShoppingCartItem> getItem(Long productId) {
        return items.stream().filter(item -> item.getProduct().getId().equals(productId)).findFirst();
    }

    @Transient
    public int getTotalQuantity() {
        return items.stream().mapToInt(ShoppingCartItem::getQuantity).sum();
    }

    @Transient
    public BigDecimal getTotalPrice() {
        return items.stream()
                .map(item -> item.getProduct().getPrice().multiply(BigDecimal.valueOf(item.getQuantity())))
                .reduce(BigDecimal.ZERO, BigDecimal::add)
                .setScale(2, RoundingMode.HALF_UP);
    }
}
