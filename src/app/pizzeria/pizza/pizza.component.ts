import { Component, Input } from '@angular/core';
import { Pizza } from '../../models/pizza.model';

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css',
})
export class PizzaComponent {
  @Input() pizza?: Pizza;
}
