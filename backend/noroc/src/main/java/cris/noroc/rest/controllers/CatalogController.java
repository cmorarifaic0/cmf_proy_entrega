package cris.noroc.rest.controllers;

import static cris.noroc.rest.dtos.CategoryConversor.toCategoryDtos;
import static cris.noroc.rest.dtos.ProductConversor.toProductDto;
import static cris.noroc.rest.dtos.ProductConversor.toProductSummaryDtos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import cris.noroc.model.exceptions.InstanceNotFoundException;
import cris.noroc.model.entities.Product;
import cris.noroc.model.services.Block;
import cris.noroc.model.services.CatalogService;
import cris.noroc.rest.dtos.BlockDto;
import cris.noroc.rest.dtos.CategoryDto;
import cris.noroc.rest.dtos.ProductDto;
import cris.noroc.rest.dtos.ProductSummaryDto;

@RestController
@RequestMapping("/catalog")
public class CatalogController {
	
	@Autowired
	private CatalogService catalogService;
	
	@GetMapping("/categories")
	public List<CategoryDto> findAllCategories() {
		return toCategoryDtos(catalogService.findAllCategories());
	}
	
	@GetMapping("/products/{id}")
	public ProductDto findProductById(@PathVariable Long id) throws InstanceNotFoundException {
		return toProductDto(catalogService.findProductById(id));
	}
	
	@GetMapping("/products")
	public BlockDto<ProductSummaryDto> findProducts(
		@RequestParam(required=false) Long categoryId,
		@RequestParam(required=false) String keywords, 
		@RequestParam(defaultValue="0") int page) {
		
		Block<Product> productBlock = catalogService.findProducts(categoryId, 
				keywords != null ? keywords.trim() : null, page, 10);
		
		return new BlockDto<>(toProductSummaryDtos(productBlock.getItems()), productBlock.getExistMoreItems());
		
	}

}
