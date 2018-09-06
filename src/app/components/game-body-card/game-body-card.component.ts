import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-body-card',
  templateUrl: './game-body-card.component.html',
  styleUrls: ['./game-body-card.component.scss']
})
export class GameBodyCardComponent implements OnInit {
 //  values = '';
 // actorlist = 'ture';
 myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  // localStorage.removeItem('Array');
  // localStorage.setItem('Array', JSON.stringify(this.array));
  // this.array = JSON.parse(localStorage.getItem('Array'));
  // localStorage.removeItem('Array'); 
  constructor(private location: Location) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith('1'),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
   const filterValue = value.toLowerCase();
    if(!(value.length == 0)) {
          return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
 }
  // onKey(event: any) {
  //   console.log(event.key);
  //   if(event.key == 'Enter') {
  //     this.actorlist = 'false';
  //     if(this.actorlist = 'false'){
  //       location.reload();
  //     }
  //   }
  //   this.values = event.target.value;
  // }
}
