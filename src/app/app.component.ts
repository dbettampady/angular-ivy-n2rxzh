import { Component } from '@angular/core';
import { Details } from '../app.models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typescriptproj';
  public itemName?: string;
  public quantity?: number=0;
  public itemPrice?: number=0;
  public total?: number;
  
  public listofDetails: Details[];
  
  constructor() {
    this.listofDetails = new Array<Details>();
  }
  public addRow() {
	let total = this.itemPrice * this.quantity;
    let details = new Details(this.itemName, this.quantity, this.itemPrice, total);
    this.listofDetails.push(details);
  }
}
