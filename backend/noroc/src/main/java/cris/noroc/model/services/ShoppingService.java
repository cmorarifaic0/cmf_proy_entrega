package cris.noroc.model.services;

import cris.noroc.model.entities.Product;
import cris.noroc.model.entities.ShoppingCart;
import cris.noroc.model.entities.ShoppingCartItem;
import cris.noroc.model.entities.User;
import cris.noroc.model.repositories.ProductRepository;
import cris.noroc.model.repositories.ShoppingCartRepository;
import cris.noroc.model.repositories.UserRepository;
import cris.noroc.rest.dtos.AddToShoppingCartParamsDto;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;

@Service
public class ShoppingService {

    private final ShoppingCartRepository shoppingCartRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    public ShoppingService(ShoppingCartRepository shoppingCartRepository, ProductRepository productRepository, UserRepository userRepository) {
        this.shoppingCartRepository = shoppingCartRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }

    public ShoppingCart createShoppingCart(User user) {
        ShoppingCart shoppingCart = new ShoppingCart(user);
        return shoppingCartRepository.save(shoppingCart);
    }

    public ShoppingCart addItemToCart(Long userId, Long productId, int quantity) {
        Optional<User> user = userRepository.findById(userId);
        Optional<Product> product = productRepository.findById(productId);

        if (user.isPresent() && product.isPresent()) {
            ShoppingCart shoppingCart = shoppingCartRepository.findByUser(user.get()).orElse(new ShoppingCart(user.get()));
            ShoppingCartItem item = shoppingCart.getItem(productId).orElse(new ShoppingCartItem(product.get(), shoppingCart, 0));
            item.incrementQuantity(quantity);
            shoppingCart.addItem(item);
            return shoppingCartRepository.save(shoppingCart);
        }

        throw new IllegalArgumentException("User or Product not found");
    }

    public ShoppingCart addToShoppingCart(Long userId, Long productId, AddToShoppingCartParamsDto params) {
        return addItemToCart(userId, productId, params.getQuantity());
    }

    public ShoppingCart removeItemFromCart(Long userId, Long productId) {
        Optional<User> user = userRepository.findById(userId);

        if (user.isPresent()) {
            ShoppingCart shoppingCart = shoppingCartRepository.findByUser(user.get()).orElseThrow(() -> new IllegalArgumentException("ShoppingCart not found"));
            ShoppingCartItem item = shoppingCart.getItem(productId).orElseThrow(() -> new IllegalArgumentException("Product not found in cart"));
            shoppingCart.removeItem(item);
            return shoppingCartRepository.save(shoppingCart);
        }

        throw new IllegalArgumentException("User not found");
    }

    public BigDecimal getTotalPrice(Long userId) {
        Optional<User> user = userRepository.findById(userId);

        if (user.isPresent()) {
            ShoppingCart shoppingCart = shoppingCartRepository.findByUser(user.get()).orElseThrow(() -> new IllegalArgumentException("ShoppingCart not found"));
            return shoppingCart.getTotalPrice();
        }

        throw new IllegalArgumentException("User not found");
    }

    public boolean cartExistsForUser(Long userId) {
        Optional<User> user = userRepository.findById(userId);
        return user.isPresent() && shoppingCartRepository.existsByUser(user.get());
    }

    public void deleteCartForUser(Long userId) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            shoppingCartRepository.deleteByUser(user.get());
        } else {
            throw new IllegalArgumentException("User not found");
        }
    }

    public ShoppingCart getCartForUser(Long userId) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            return shoppingCartRepository.findByUser(user.get()).orElseThrow(() -> new IllegalArgumentException("ShoppingCart not found"));
        } else {
            throw new IllegalArgumentException("User not found");
        }
    }
}
