import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { BookListComponent }   from './book-list/book-list.component';

import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  declarations: [
    BookListComponent
  ]
})
export class ChallengeModule {}