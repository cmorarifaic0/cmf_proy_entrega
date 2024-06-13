package cris.noroc.model.entities;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoppingCartItemDao extends JpaRepository<ShoppingCartItem, Long> {
}
