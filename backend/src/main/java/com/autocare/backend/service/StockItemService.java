package com.autocare.backend.service;

import com.autocare.backend.model.StockItem;
import com.autocare.backend.repository.StockItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StockItemService {
    @Autowired
    private StockItemRepository stockItemRepository;

    public List<StockItem> getAllStockItems() {
        return stockItemRepository.findAll();
    }

    public StockItem getStockItemById(Long id) {
        return stockItemRepository.findById(id).orElseThrow(() -> new RuntimeException("Stock item not found"));
    }

    public StockItem saveStockItem(StockItem stockItem) {
        return stockItemRepository.save(stockItem);
    }

    public void deleteStockItem(Long id) {
        stockItemRepository.deleteById(id);
    }
}
