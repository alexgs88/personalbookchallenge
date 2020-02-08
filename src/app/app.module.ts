import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChallengeComponent } from './challenge/challenge/challenge.component';
import { BookListComponent } from './challenge/book-list/book-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: ChallengeComponent },
    ])
  ],
  declarations: [
    AppComponent,    
    ChallengeComponent,
    BookListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }