import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SessionStorageService} from 'ngx-webstorage';

@Injectable()
export class AuthenticationService {

	public apiAuthUrl='http://172.104.91.187';
	public user;
	public hasSession;

  constructor(public http: HttpClient, public locker:SessionStorageService) {

  }

  public isLoggein(){
  	const user=this.locker.retrieve('user');
  	if(!!user){
  		this.user=user;
  		this.hasSession=true;
  	}

  	return this.hasSession;

  }

  public logIn(username:string,password:string){

  		const url=`${this.apiAuthUrl}/users/login`;

  		return this.http.post(url,{

  			username:username,
  			password:password

  		});

  }

  public logout(){
  	this.user=null;
  	this.hasSession=false;
  	this.locker.clear('user');
  } 

}
