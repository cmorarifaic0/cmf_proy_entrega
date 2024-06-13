package cris.noroc.model.exceptions;

public class EmptyShoppingCartException extends Exception {
    public EmptyShoppingCartException() {
        super("Shopping cart is empty");
    }
}