package cris.noroc.model.entities;

import org.springframework.data.domain.Slice;

public interface CustomizedProductDao {
	
	Slice<Product> find(Long categoryId, String text, int page, int size);

}
