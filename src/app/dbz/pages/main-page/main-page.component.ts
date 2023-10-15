import { Component } from '@angular/core';
import { Character } from '../../interfaces/character';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent {
  
  constructor(private dbzService : DbzService){
  }

  get characters() : Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string) : void {
    this.dbzService.deleteCharacterByID( id );
  }
  onNewCharacter( character : Character ) : void{
    this.dbzService.addCharacter( character );
  }






}
