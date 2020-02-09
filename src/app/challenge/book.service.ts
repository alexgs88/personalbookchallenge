import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from './book';
import { BOOKS } from './mock-books';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  constructor() { }

  getBooks(): Observable<Book[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(BOOKS);
  }

  getBook(id: number | string) {
    return this.getBooks().pipe(
      // (+) before `id` turns the string into a number
      map((books: Book[]) => books.find(book => book.id === +id))
    );
  }

  addBook (book: Book): Observable<Book> {
  return this.http.post<Book>(this.booksUrl, book, httpOptions)
    .pipe(
      //catchError(this.handleError('addBook', hero))
    );
}
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/