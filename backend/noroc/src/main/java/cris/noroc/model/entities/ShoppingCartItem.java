package cris.noroc.model.entities;

import jakarta.persistence.*;

//import java.util.Optional;

@Entity
@Table(name = "ShoppingCartItem")
public class ShoppingCartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
	private Long id;
    
	@ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "shoppingCartId")
    
	private ShoppingCart shoppingCart;
    
	@ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "productId")
    
	private Product product;
    private int quantity;

    public ShoppingCartItem() {}

    public ShoppingCartItem(Product product, ShoppingCart shoppingCart, int quantity) {
        this.product = product;
        this.shoppingCart = shoppingCart;
        this.quantity = quantity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ShoppingCart getShoppingCart() {
        return shoppingCart;
    }

    public void setShoppingCart(ShoppingCart shoppingCart) {
        this.shoppingCart = shoppingCart;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
	public void incrementQuantity(int quantity) {
        this.quantity += quantity;
    }


}
