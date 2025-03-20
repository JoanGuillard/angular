import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from '../entity/book';
import { ApiResponse } from '../entity/api-response';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private server: string = "http://localhost:8000/api/books";
  private headers =
    new HttpHeaders({ 'Content-Type': 'application/ld+json' });
    private patch_headers = new HttpHeaders({ 'Content-Type': 'application/merge-patch+json' });
  constructor(private http: HttpClient) { }

  public all(): Observable<Array<Book>> {
    return this.http.get<ApiResponse>(this.server,
      { observe: 'body', responseType: 'json' })
      .pipe(map((data) => data['member']))
  }

  public createBook(book: Book): Observable<boolean> {
    return this.http.post<Book>(this.server,
      book,
      { headers: this.headers, observe: 'response', responseType: 'json' })
      .pipe(map((response) => response.status === 201))
  }

  public book(id: number): Observable<Book> {
    return this.http.get<Book>(this.server+"/"+id,
      { headers: this.headers, observe: 'body', responseType: 'json' })
  }

  public deleteBookFromId(id: number): Observable<boolean> {
    return this.http.delete(this.server + "/" + id.toString(),
      { headers: this.headers, observe: 'response', responseType: 'json' })
      .pipe(map((response) => response.status === 204))
  }

  public modifyBook(Book: Book): Observable<boolean> {
    return this.http.patch(this.server + "/" + Book.id!.toString(),
      Book,
      { headers: this.patch_headers, observe: 'response', responseType: 'json' })
      .pipe(map((response) => response.status === 200))
  }

}
