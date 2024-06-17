package cris.noroc.model.repositories;

import java.util.Optional;

import org.springframework.data.domain.Slice;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import cris.noroc.model.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

    Slice<Order> findByUserIdOrderByDateDesc(Long userId, Pageable pageable);
    Optional<Order> findByIdAndUserId(Long id, Long userId);
}
