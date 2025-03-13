import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../entity/book';
import { BookService } from '../services/book.service';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-liste-book',
  imports: [NgFor,AsyncPipe],
  templateUrl: './liste-book.component.html',
  styleUrl: './liste-book.component.scss'
})
export class ListeBookComponent {
  booksObs : Observable<Array<Book>>

  constructor(private service: BookService){
    this.booksObs = this.service.all()
  }
}
