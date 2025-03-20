import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BookService } from '../services/book.service';
import { Book } from '../entity/book';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-book',
  imports: [FormsModule,RouterLink],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.scss'
})
export class CreateBookComponent{
  book : Book = {
    id:0,
    title:'',
    publisher:'',
    year:0,
    backcover:'',
    isbn:0

  }
  

  constructor(private service: BookService, 
    private route: ActivatedRoute,
    private router: Router) { }


    onSubmit() : void{
      this.service.createBook(this.book).subscribe((r) => this.router.navigate(["/livres"]))
    }
      
    

}


