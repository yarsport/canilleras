import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promotion',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule si es necesario
  templateUrl: './promotion.component.html', // Enlazamos el archivo HTML
  styleUrls: ['./promotion.component.css'] // Si deseas agregar estilos CSS personalizados
})
export class PromotionComponent {}
