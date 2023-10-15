import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent {
  @Output()
  public OnDelete : EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList : Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  onDeleteCharacter(id : string|undefined) : void{
    if(id === undefined) return;
    // Emitir el id del personaje
    this.OnDelete.emit(id);
    
  }
}
