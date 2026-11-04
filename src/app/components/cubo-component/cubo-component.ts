import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cubo } from '../../models/cubo';

@Component({
  selector: 'app-cubo-component',
  standalone: false,
  styleUrl: './cubo-component.css',
  templateUrl: './cubo-component.html',
})
export class CuboComponent {
  @Input() cube!: Cubo;
  public mensaje! : string;
  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter();
  mostrarFavorito(): void {
    this.seleccionarFavorito.emit(this.cube);
  }
}
