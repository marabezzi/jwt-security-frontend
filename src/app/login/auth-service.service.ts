import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  PATH_OF_API = 'http://localhost:8081'
  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  );

  constructor(private http: HttpClient) { }

  login(record: Partial<User> ) {
    return this.http.post<User>(this.PATH_OF_API + '/api/v1/auth/authenticate', record, { headers: this.requestHeader })

}
}
