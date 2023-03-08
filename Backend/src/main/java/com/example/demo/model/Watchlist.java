package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="Watchlist")
public class Watchlist {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
	@Column(name="movie")
    private String movie;
	@Column(name="description")
    private String description;
	@Column(name="platform")
    private String platform;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getMovie() {
		return movie;
	}
	public void setMovie(String movie) {
		this.movie = movie;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getPlatform() {
		return platform;
	}
	public void setPlatform(String platform) {
		this.platform = platform;
	}
	public Watchlist() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Watchlist(String movie, String description, String platform) {
		super();
		this.movie = movie;
		this.description = description;
		this.platform = platform;
	}
    
   
}
