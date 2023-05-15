package com.cogent.infotech.bookmanagementfullstack.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cogent.infotech.bookmanagementfullstack.entity.Book;

public interface BookRepository extends JpaRepository<Book, Integer>{

}
