import { Component, OnInit,ViewChild} from '@angular/core';
import {BookmarksService} from '../../services/bookmarks.service';
import {bookmarks} from '../../models/bookmarks.model';
import {BookmarksResponse} from '../../models/bookmarks-response.model';
import {MatPaginator,MatTableDataSource,MatSort} from '@angular/material';


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

	public bookmarks:Array<bookmarks>;

	 displayedColumns = ['id', 'title', 'description', 'created','actions'];
  	dataSource;
  	@ViewChild(MatPaginator) paginator:MatPaginator;//paginacion
  	@ViewChild(MatSort) sort:MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(public bookmarksService:BookmarksService) { }

  openBookmarkUrl(bookmark:Bookmark,event:Event){

  	event.preventDefault();
  	
  	window.location.href=bookmark.url;

  }

  ngOnInit() {

  	this.bookmarksService.getAll().subscribe(
  		(data:BookmarksResponse)=>{

  			this.bookmarks=data.bookmarks;
  			this.dataSource= new MatTableDataSource<bookmarks>(this.bookmarks);
  			this.dataSource.paginator=this.paginator;//paginacion
  			this.dataSource.sort=this.sort;

  		},
  		error=>{
  			console.error(error);
  		});
  }

}
