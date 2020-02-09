import { switchMap } from "rxjs/operators";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, of } from "rxjs";

import { BookService } from "../book.service";
import { Book } from "../book";

@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.css"]
})
export class BookDetailComponent implements OnInit {
  book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BookService
  ) {}

  ngOnInit() {
    this.book$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        var paramId = params.get("id");

        if (paramId) return this.service.getBook(paramId);
        else return of(new Book());
      })
    );
  }

  gotoBooks(book: Book) {
    let bookId = book ? book.id : null;
    this.router.navigate(["/books", { id: bookId }]);
  }

  addBook(book: Book) {  
    
  }
}
