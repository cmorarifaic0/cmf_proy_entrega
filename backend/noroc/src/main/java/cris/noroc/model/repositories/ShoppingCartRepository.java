package cris.noroc.model.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import cris.noroc.model.entities.ShoppingCart;
import cris.noroc.model.entities.User;

import java.util.Optional;

@Repository
public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Long> {
    
    Optional<ShoppingCart> findByUser(User user);
    
    boolean existsByUser(User user);
    
    void deleteByUser(User user);
}
