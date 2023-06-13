package ru.micro.start.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.micro.start.shop.model.ShopManager;

import java.util.List;

@Repository
public interface ShopManagerRepository extends JpaRepository<ShopManager, Long> {
    List<ShopManager> findByShopId(Long id);
}
