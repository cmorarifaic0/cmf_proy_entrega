package cris.noroc.model.entities;

import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductDao extends JpaRepository<Product, Long>, CustomizedProductDao {
    
}
