import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Book } from '../book'
import { BookService }  from '../book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"]
})
export class BookListComponent implements OnInit {
    books$: Observable<Book[]>;
    selectedId: number;

  constructor(
     private service: BookService,
     private route: ActivatedRoute
  ) {}

  ngOnInit() {
     this.books$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getBooks();
      })
    );
  }
}
