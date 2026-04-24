package com.autocare.backend.controller;

import com.autocare.backend.model.StockItem;
import com.autocare.backend.service.StockItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stock")
public class StockItemController {
    @Autowired
    private StockItemService stockItemService;

    @GetMapping
    @PreAuthorize("hasRole('ADMIN') or hasRole('STAFF')")
    public List<StockItem> getAllStockItems() {
        return stockItemService.getAllStockItems();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('STAFF')")
    public ResponseEntity<StockItem> getStockItemById(@PathVariable Long id) {
        return ResponseEntity.ok(stockItemService.getStockItemById(id));
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public StockItem createStockItem(@RequestBody StockItem stockItem) {
        return stockItemService.saveStockItem(stockItem);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('STAFF')")
    public ResponseEntity<StockItem> updateStockItem(@PathVariable Long id, @RequestBody StockItem stockDetails) {
        StockItem item = stockItemService.getStockItemById(id);
        item.setName(stockDetails.getName());
        item.setPartNumber(stockDetails.getPartNumber());
        item.setQuantity(stockDetails.getQuantity());
        item.setUnitPrice(stockDetails.getUnitPrice());
        item.setLowStockThreshold(stockDetails.getLowStockThreshold());
        return ResponseEntity.ok(stockItemService.saveStockItem(item));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteStockItem(@PathVariable Long id) {
        stockItemService.deleteStockItem(id);
        return ResponseEntity.ok().build();
    }
}
