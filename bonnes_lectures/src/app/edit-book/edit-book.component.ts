import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Book } from '../entity/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-edit-book',
  imports: [FormsModule,RouterLink],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.scss'
})
export class EditBookComponent {

  book : Book = {
      id:0,
      title:'',
      publisher:'',
      year:0,
      backcover:'',
      isbn:0
  
    }

    constructor(private bookService: BookService,
        private route: ActivatedRoute,
        private router: Router) { }
    
      
    
    ngOnInit(): void {
      const idParameter: string | null = this.route.snapshot.paramMap.get('id')
      if (idParameter !== null) {
        let id = Number(idParameter)
        this.bookService.book(id).subscribe((book) => this.book = book)
      }
  }

  update(): void {
    this.bookService.modifyBook(this.book)
    .subscribe((r) => this.router.navigate(["/livres"]))
  }

    
}
