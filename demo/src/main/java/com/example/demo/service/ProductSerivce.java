package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Products;
import com.example.demo.repository.IProductsRepository;

@Service
public class ProductSerivce implements IProductService {
    @Autowired
    IProductsRepository iProdRepo;

    @Override
    public List<Products> displayProducts() {
        
        return this.iProdRepo.findAll();
    }
    
}
