package cris.noroc.model.exceptions;

public class DuplicateInstanceException extends Exception {

    private String name;
    private Object key;

    public DuplicateInstanceException(String name, Object key) {
        super(name + " with key " + key + " already exists");
        this.name = name;
        this.key = key;
    }

    public String getName() {
        return name;
    }

    public Object getKey() {
        return key;
    }
}
