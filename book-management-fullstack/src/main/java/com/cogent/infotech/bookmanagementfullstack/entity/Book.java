package com.cogent.infotech.bookmanagementfullstack.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String name;
	double price;
	
	public Book() {
		
	}
	
	public Book(int id, String name, double price) {
		this.id=id;
		this.name=name;
		this.price=price;
	}
	
	public Book(String name, double price) {
		this.name=name;
		this.price=price;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
	
	
}
