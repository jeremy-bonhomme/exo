import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FilterP } from '../../pipe/filter';
import { UserM } from '../../model';
import { UserS } from '../../service';

@Component( {
  providers: [ FilterP ],
  selector: 'app-list',
  templateUrl: './list.html',
} )
export class UserListC implements OnInit {
  public message: string = '';
  public search: string = '';
  public selectedUser: UserM;
  public users: Array<UserM> = [];
  
  public constructor( protected _userS: UserS ) {}

  public ngOnInit(): void {
    this._userS.usersInit().subscribe( ( users: UserM[] ) => {
      this.users = users;
    },
    (err: HttpErrorResponse) => {
      this.message = `L'API Jasonplaceholder retourne une erreur ${ err.status }`;
    } );
  }

  public itemSelected( user: UserM ): void {
    this.selectedUser = user;
    document.getElementById( 'user-modal' ).className += ' is-open';
  }
}
