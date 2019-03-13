import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "./comment";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient){}

  private postUrl = 'http://localhost:8080/comments';

  saveComment(content: string, bookId: number): Observable<number> {
    let comment: Comment = new Comment();
    comment.content = content;
    comment.bookId = bookId;
    return this.http.post<number>(this.postUrl, comment, httpOptions);
  };

}
