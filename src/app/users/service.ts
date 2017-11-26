import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import * as _ from 'lodash';

import { UserM } from './model';

@Injectable()
export class UserS {

  public constructor( protected http: HttpClient ) { }
  
  public usersInit(): Observable<Array<UserM>> {
    return this.http.get<Array<UserM>>( 'https://jsonplaceholder.typicode.com/users' );
  }
  
}
