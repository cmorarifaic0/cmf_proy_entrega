package cris.noroc.rest.dtos;

import java.util.List;
import java.util.stream.Collectors;

import cris.noroc.model.entities.Product;

public class ProductConversor {
	
	private ProductConversor() {}
	
	public static ProductDto toProductDto(Product product) {
		return new ProductDto(
            product.getId(),
            product.getName(),
            product.getDescription(),
            product.getPrice(),
            product.getImageUrl(),
            product.getCategory().getId()
        );
	}
	
	public static List<ProductSummaryDto> toProductSummaryDtos(List<Product> products) {
		return products.stream()
            .map(ProductConversor::toProductSummaryDto)
            .collect(Collectors.toList());
	}
	
	private static ProductSummaryDto toProductSummaryDto(Product product) {
		return new ProductSummaryDto(
            product.getId(),
            product.getName(),
            product.getCategory().getId()
        );
	}
}
