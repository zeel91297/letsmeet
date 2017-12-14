import { Injectable } from '@angular/core';
import { Product } from './product';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProductDbService {

  public url: string = 'https://rkdemotask.herokuapp.com/Products/';

  constructor(private _http: Http) {

  }

  getAllProducts() {
    return this._http.get(this.url).map((res: Response) => res.json());
  }

}
