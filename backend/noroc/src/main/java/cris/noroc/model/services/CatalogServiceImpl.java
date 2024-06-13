package cris.noroc.model.services;

//import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cris.noroc.model.entities.Category;
import cris.noroc.model.entities.CategoryDao;
import cris.noroc.model.entities.Product;
import cris.noroc.model.entities.ProductDao;
import cris.noroc.model.exceptions.InstanceNotFoundException;

@Service
@Transactional(readOnly=true)
public class CatalogServiceImpl implements CatalogService {
	
	@Autowired
	private CategoryDao categoryDao;
	
	@Autowired
	private ProductDao productDao;

	@Override
	public List<Category> findAllCategories() {
		return categoryDao.findAll(Sort.by(Sort.Direction.ASC, "name"));
	}

	@Override
	public Product findProductById(Long id) throws InstanceNotFoundException {
		
		Optional<Product> product = productDao.findById(id);
		
		if (!product.isPresent()) {
			throw new InstanceNotFoundException("noroc.entities.product", id);
		}
		
		return product.get();

	}

	@Override
	public Block<Product> findProducts(Long categoryId, String keywords, int page, int size) {
		
		Slice<Product> slice = productDao.find(categoryId, keywords, page, size);
		
		return new Block<>(slice.getContent(), slice.hasNext());
		
	}

}
