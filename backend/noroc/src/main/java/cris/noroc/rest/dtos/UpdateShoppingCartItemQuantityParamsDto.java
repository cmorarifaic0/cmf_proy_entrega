package cris.noroc.rest.dtos;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public class UpdateShoppingCartItemQuantityParamsDto {

    @NotNull
    private Long productId;

    @Min(value = 1)
    private int quantity;

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
