import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters:any = null;

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get("assets/database.json")
    .subscribe(
      result => {
        this.characters = result;
      }
    )
  }

}
