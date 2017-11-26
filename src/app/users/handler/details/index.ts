import { Component, Input } from '@angular/core';

import { UserM } from '../../model';
import { UserS } from '../../service';

@Component( {
  selector: 'app-details',
  styleUrls: [ './details.css' ],
  templateUrl: './details.html',
} )
export class UserDetailsC {
  @Input() public user: UserM;

  public constructor( protected _userS: UserS ) { }

  public closeModal(): void {
    document.getElementById( 'user-modal' ).classList.remove( 'is-open' );
  }

}
