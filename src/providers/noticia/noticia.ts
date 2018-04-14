import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NoticiaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoticiaProvider {

  private url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a7a3caab57724227b59a377a93ff34c6'

  constructor(public http: HttpClient) {
    console.log('Hello NoticiaProvider Provider');
  }

  carregarNoticias() {
    return this.http.get(this.url);
  }

}
