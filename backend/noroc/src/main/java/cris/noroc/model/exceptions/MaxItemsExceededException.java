package cris.noroc.model.exceptions;

public class MaxItemsExceededException extends Exception {
    public MaxItemsExceededException() {
        super("Max items exceeded");
    }
}