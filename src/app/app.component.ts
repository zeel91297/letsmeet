import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductDbService } from './product-db.service';
import { } from '';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Products';

  products: Product[] = [];
  constructor(private _data: ProductDbService) {

  }

  ngOnInit() {
    this._data.getAllProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      }
    );
  }
}
