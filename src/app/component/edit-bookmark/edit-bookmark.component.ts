import { Component,Inject,OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss']
})
export class EditBookmarkComponent implements OnInit {

	public isBeingSave=false;
	public title=new FormControl('',[Validators.required]);//los campos del formulario son requeridos
	public url=new FormControl('',[Validators.required]);//los campos del formulario son requeridos



  constructor(public dialogRef:MatDialogRef<EditBookmarkComponent>,@Inject (MAT_DIALOG_DATA) public bookmark:any) { }


  getErrorMessageForTitle(){

  	return this.title.hasError('required') ? 'Por favor ingresa un titulo' :'';
  }


  getErrorMessageForUrl(){

  		return this.url.hasError('required') ? 'Por favor ingresa una URL válida' :'';

  }

  onSubmit(event:Event){
  	event.preventDefault();
  	console.log(this.title.value,this.url.value);
  	this.isBeingSave=true;

  	//llamado para el bookmars service



  }

  ngOnInit() {
  }

}
