import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private id_counter = 0;
  private notes: Note[] = [
    {
      id: 1
      , title: "buy movie tickets"
      , body: "latest MI moview looks promising"
    },
    {
      id: 2, title: "buy ggroceries"
      , body: "tomato,cucumber,salmon,corn"
    },
    {
      id: 3, title: "invite guests for dinner"
      , body: "Moshe and keren"
    }
  ]
  constructor() { }
  public load(): Observable<Note[]> {
    return of(this.notes);
  }
 

}
