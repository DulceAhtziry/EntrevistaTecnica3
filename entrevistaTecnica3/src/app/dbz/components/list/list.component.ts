import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/persona.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public persoanjesList : Personaje[] = [{
    nombre : "Vegeta",
    poder : 20000
  }];
  public personajesAdicionales: Personaje[] = [];
}
