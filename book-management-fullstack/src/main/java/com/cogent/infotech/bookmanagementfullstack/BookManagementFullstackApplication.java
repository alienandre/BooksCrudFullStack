package com.cogent.infotech.bookmanagementfullstack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cogent.infotech.bookmanagementfullstack.controller.BookController;


@SpringBootApplication
public class BookManagementFullstackApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(BookManagementFullstackApplication.class, args);
	}
	
	@Autowired
	private BookController bookController;
	@Override
	public void run(String... args) throws Exception {
		
	}

}
