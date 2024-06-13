package cris.noroc.model.entities;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDao extends JpaRepository<Order, Long> {
    Slice<Order> findByUserIdOrderByDateDesc(Long userId, Pageable pageable);
}
