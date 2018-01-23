import { Component, OnInit,ViewChild} from '@angular/core';
import {BookmarksService} from '../../services/bookmarks.service';
import {EditBookmarkComponent} from '../edit-bookmark/edit-bookmark.component';
import {bookmarks} from '../../models/bookmarks.model';
import {BookmarksResponse} from '../../models/bookmarks-response.model';
import {MatPaginator,MatTableDataSource,MatSort,MatDialog} from '@angular/material';


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

  constructor(public bookmarksService:BookmarksService,public dialog:MatDialog) { }

  openBookmarkUrl(bookmark:bookmarks,event:Event){

  	event.preventDefault();

  	window.location.href=bookmark.url;

  }

    editBookmark(bookmark:bookmarks,event:Event){

  
    	this.openDialogToEditBookmark(bookmark);
  	

  }

  openDialogToEditBookmark(bookmark:bookmarks){

  	const dialogRef=this.dialog.open(EditBookmarkComponent,{

  		data:bookmark,
  		height:'400px',
  		width:'600px'

  	});

  	dialogRef.afterClosed().subscribe(result=>{

  		console.log(result);

  	})

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
