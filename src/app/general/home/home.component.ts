import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { StoreComponent } from './store/store.component';
import { PromotionComponent } from './promotion/promotion.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StoreComponent, PromotionComponent, HeaderComponent],  // Asegúrate de agregar CommonModule aquí
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() {}

}
