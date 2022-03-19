import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  constructor(private http:HttpClient) { }

  url = 'http://userservice-env.eba-trppveuh.ap-southeast-1.elasticbeanstalk.com/';
  
  public doRegistration(user){
    return this.http.post(this.url + "/register",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get(this.url + "/getAllUsers");
  }

  public getUserByEmail(email){
    return this.http.get(this.url + "/findUser/"+email);
  }

  public deleteUser(id){
    return this.http.delete(this.url + "/cancel/"+id);
  }
}
