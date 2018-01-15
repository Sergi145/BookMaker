import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BookmarksResponse} from '../models/bookmarks-response.model';

@Injectable()
export class BookmarksService {


  constructor(public http:HttpClient) {

  	
  }

  getAll():Observable<BookmarksResponse>{

	const url='http://bookmarks-api-cakephp.webtraining.zone/bookmarks.json';

  		return this.http.get<BookmarksResponse>(url);

}

}



