package cris.noroc.model.repositories;


import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import cris.noroc.model.entities.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
     Slice<Order> findByUserIdOrderByDateDesc(Long userId, Pageable pageable);
}