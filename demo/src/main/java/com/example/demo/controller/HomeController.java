package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Products;
import com.example.demo.service.IProductService;


@RestController
@CrossOrigin
public class HomeController {
    @Autowired
    IProductService iProdSer;

    @GetMapping("/")
    public String testHome() {
        return "Hello cc!!!";
    }

    @GetMapping("/list")
    public ResponseEntity<List<Products>> displayListProducts(){
        List<Products> lProducts = this.iProdSer.displayProducts();
        if(lProducts.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(lProducts,HttpStatus.OK);
    }
}
