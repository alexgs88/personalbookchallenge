import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ChallengeComponent } from './challenge/challenge/challenge.component';
import { BookListComponent }   from './challenge/book-list/book-list.component';
import { BookDetailComponent }   from './challenge/book-detail/book-detail.component';
import { ChallengeModule } from './challenge/challenge.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    ChallengeModule,
    AppRoutingModule
    // RouterModule.forRoot([
    //   { path: '', component: ChallengeComponent },
    // ])
  ],
  declarations: [
    AppComponent,    
    ChallengeComponent,
    BookListComponent,
    BookDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }