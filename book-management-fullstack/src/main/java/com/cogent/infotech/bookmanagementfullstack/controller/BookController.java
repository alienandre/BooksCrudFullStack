package com.cogent.infotech.bookmanagementfullstack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cogent.infotech.bookmanagementfullstack.Repository.BookRepository;
import com.cogent.infotech.bookmanagementfullstack.entity.Book;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class BookController {
	@Autowired
	private BookRepository bookRepository;
	
	@GetMapping("/book")
	public List<Book> getAllBooks(){
		return (List<Book>)bookRepository.findAll();
	}
	
	@PostMapping("/book")
	public Book saveBook(@Validated @RequestBody Book book) {
		return bookRepository.save(book);
	}
	
	@DeleteMapping("/book/{id}")
	public void deleteBook(@PathVariable("id") String id) {
		int bookId = Integer.parseInt(id);
		bookRepository.deleteById(bookId);
	}
	
	@PutMapping("/book")
	public void updateBook(@Validated @RequestBody Book book) {
		bookRepository.save(book);
	}
}
