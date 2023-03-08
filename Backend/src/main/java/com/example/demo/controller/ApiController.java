package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Watchlist;
import com.example.demo.service.ApiService;

@CrossOrigin
@RestController
public class ApiController {
  @Autowired
  ApiService service;
  
   @GetMapping("/")
   public List<Watchlist> getList(){
	   return service.getList();
   }
   @PostMapping("/")
   public Watchlist post(@RequestBody Watchlist x){
	   return service.post(x);
   }
   @DeleteMapping("/{id}")
   public String delete(@PathVariable int id) {
	   return service.delete(id);
   }
   @PutMapping("/{id}")
   public String update(@PathVariable int id,@RequestBody Watchlist x ) {
	   return service.update(id,x);
   }
   @GetMapping("/{id}")
   public Optional<Watchlist> getById(@PathVariable int id) {
	   return service.getById(id);
   }
}
