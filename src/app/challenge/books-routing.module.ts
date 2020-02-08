import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookListComponent }    from './book-list/book-list.component';
import { BookDetailComponent }  from './book-detail/book-detail.component';

const booksRoutes: Routes = [
  { path: 'books',  component: BookListComponent, data: { animation: 'books' } },
  { path: 'books/:id', component: BookDetailComponent, data: { animation: 'book' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(booksRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BooksRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/