package cris.noroc.rest.dtos;

import java.util.List;

public class BlockDto<T> {

    private List<T> items;
    private boolean hasMoreItems;

    public BlockDto(List<T> items, boolean hasMoreItems) {
        this.items = items;
        this.hasMoreItems = hasMoreItems;
    }

    public List<T> getItems() {
        return items;
    }

    public boolean isHasMoreItems() {
        return hasMoreItems;
    }
}
