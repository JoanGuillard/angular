import { Component, OnInit } from '@angular/core';
import { Book } from '../entity/book';
import { BookService } from '../services/book.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [NgIf,AsyncPipe,RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit {
  book!: Observable<Book>
  
  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router) { }

  

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get("id")
    let id = Number(idParam);
    this.book = this.bookService.book(id)
  }

  onDelete() : void{
    const idParam = this.route.snapshot.paramMap.get("id")
    let id = Number(idParam);
    this.bookService.deleteBookFromId(id).subscribe((r) => this.router.navigate(["/livres"]))
  }
}
