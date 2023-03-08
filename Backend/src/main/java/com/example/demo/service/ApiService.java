package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;


import com.example.demo.model.Watchlist;
import com.example.demo.repository.Apirepository;

@Service
public class ApiService {
   @Autowired
   Apirepository repo;
   public List<Watchlist> getList() {
	   return repo.findAll();
   }
   public Watchlist post(@RequestBody Watchlist x){
	   return repo.save(x);
	   
   }
public String delete(int id) {
      repo.deleteById(id);
      return "deleted";
}
public String update(int id, Watchlist x) {
	if(repo.existsById(id)) {
		Watchlist temp=repo.getReferenceById(id);
		temp.setId(id);
		temp.setMovie(x.getMovie());
		temp.setDescription(x.getDescription());
		temp.setPlatform(x.getPlatform());
        repo.save(temp);
		return "updated";

}
		return "Invalid Id";
}
public Optional<Watchlist> getById(int id) {
	  return repo.findById(id);
}
}
		
