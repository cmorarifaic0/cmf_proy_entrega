package cris.noroc.rest.controllers;

import cris.noroc.model.entities.Product;
import cris.noroc.model.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/api/newly-added-products")
    public List<Product> getNewlyAddedProducts() {
        return productRepository.findTop10ByOrderByDateAddedDesc();
    }
}
