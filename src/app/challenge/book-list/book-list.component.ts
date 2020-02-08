import { Component, OnInit } from "@angular/core";

interface Book {
  id: number;
  name: string;
  points: number;
  genre_id: number;
  authors: string[];
}

const BOOKS: Book[] = [
  {
    id: 1,
    name: "Harry Potter",
    points: 10,
    genre_id: 1,
    authors: ["J. K. Rowling"]
  }
];

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"]
})
export class BookListComponent implements OnInit {
  books = BOOKS;

  constructor() {}

  ngOnInit() {}
}
