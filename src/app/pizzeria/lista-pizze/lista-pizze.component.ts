import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../../models/pizza.model';

@Component({
  selector: 'app-lista-pizze',
  standalone: true,
  imports: [],
  templateUrl: './lista-pizze.component.html',
  styleUrl: './lista-pizze.component.css',
})
export class ListaPizzeComponent {
  @Input({ required: true }) listaPizze!: Pizza[];

  @Output() selectPizza = new EventEmitter<number>();

  onSelectedPizza(pizzaId: number) {
    this.selectPizza.emit(pizzaId);
  }
}
