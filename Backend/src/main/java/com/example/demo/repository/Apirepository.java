package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Watchlist;

public interface Apirepository extends JpaRepository<Watchlist,Integer>{
	
}
