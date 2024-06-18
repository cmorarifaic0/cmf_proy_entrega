package cris.noroc.rest.dtos;

public class AddToShoppingCartParamsDto {
    private int quantity;

    public AddToShoppingCartParamsDto(Long productId,  int quantity1) {}

    public AddToShoppingCartParamsDto(int quantity) {
        this.quantity = quantity;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
