import { Component, OnInit } from '@angular/core';
import {BookmarksService} from '../../services/bookmarks.service';
import {bookmarks} from '../../models/bookmarks.model';
import {BookmarksResponse} from '../../models/bookmarks-response.model';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

	public bookmarks:Array<bookmarks>;

	 displayedColumns = ['id', 'title', 'description', 'created'];
  	dataSource;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(public bookmarksService:BookmarksService) { }

  ngOnInit() {

  	this.bookmarksService.getAll().subscribe(
  		(data:BookmarksResponse)=>{

  			this.bookmarks=data.bookmarks;
  			this.dataSource= new MatTableDataSource<bookmarks>(this.bookmarks);

  		},
  		error=>{
  			console.error(error);
  		});
  }

}
