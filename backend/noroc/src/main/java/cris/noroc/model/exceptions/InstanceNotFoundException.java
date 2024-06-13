package cris.noroc.model.exceptions;

public class InstanceNotFoundException extends Exception {

    private String name;
    private Object key;

    public InstanceNotFoundException(String name, Object key) {
        super(name + " with key " + key + " not found");
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
