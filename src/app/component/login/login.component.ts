import { Component, OnInit } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public username=new FormControl('',[Validators.required]);
	public password=new FormControl('',[Validators.required]);
  public status:string;


  constructor(public authService:AuthenticationService,public locker:SessionStorageService,public router:Router) {

  }

  getErrorMessageForUsername(){
  	const hasError=this.username.hasError('required');

  	return hasError ? 'Nombre de usario es requerido':'';

  }

  getErrorMessageForPassword(){

  	const hasError=this.password.hasError('required');

  	return hasError ? 'La contraseña es requerida':'';

  }

  ngOnInit() {
  }

  onSubmit(event){

  	event.preventDefault();
    this.authService.logIn(this.username.value,this.password.value)
      .subscribe(
        (data)=>{

            this.authService.user=data;
            this.locker.store('user',data);//es lo que guarda en el sesion storage
            this.router.navigate(['/home']);

        },
         (error:HttpErrorResponse)=>{

           if(error.status==406)
              this.status='error';
             console.error('No se a podido loguear');
         }


        );
  }

}
