import { Component } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { DUMMY_PIZZA } from './DUMMY_PIZZA';
import { ListaPizzeComponent } from './lista-pizze/lista-pizze.component';
import { PizzaComponent } from './pizza/pizza.component';

@Component({
  selector: 'app-pizzeria',
  standalone: true,
  imports: [ListaPizzeComponent, PizzaComponent],
  templateUrl: './pizzeria.component.html',
  styleUrl: './pizzeria.component.css',
})
export class PizzeriaComponent {
  listaPizze: Pizza[] = DUMMY_PIZZA;
  pizza?: Pizza;

  onSelectPizza(idPizza: number) {
    this.pizza = this.listaPizze.find((pizza) => pizza.id === idPizza);
  }
}
