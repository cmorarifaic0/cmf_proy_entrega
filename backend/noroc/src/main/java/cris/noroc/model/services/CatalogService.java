package cris.noroc.model.services;

import java.util.List;

import cris.noroc.model.exceptions.InstanceNotFoundException;
import cris.noroc.model.entities.Category;
import cris.noroc.model.entities.Product;

public interface CatalogService {
	
	List<Category> findAllCategories();
	
	Product findProductById(Long id) throws InstanceNotFoundException;
	
	Block<Product> findProducts(Long categoryId, String keywords, int page, int size);

}
