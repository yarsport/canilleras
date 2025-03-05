import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [FormsModule, CommonModule], // Añadir FormsModule en imports
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  // Definimos los productos disponibles con más detalles
  products = [
    {
      id: 1,
      name: 'Canillera Recta',
      price: 15,
      imageUrl: './assets/images/crud/canillerarecta.png',
      size: 'Talla S',
      description: 'Canillera personalizada para deportistas con un ajuste perfecto y máxima protección.',
      paymentOptions: ['Yape', 'AltoKe'],
      selectedQuantity: 1,
      selectedSize: 'Talla S',
      selectedPayment: 'Yape'
    },
    {
      id: 2,
      name: 'Canillera Curvo',
      price: 20,
      imageUrl: './assets/images/crud/canilleracurvo.jpg',
      size: 'Talla M',
      description: 'Ideal para jugadores que buscan flexibilidad y confort en sus movimientos.',
      paymentOptions: ['Yape', 'AltoKe'],
      selectedQuantity: 1,
      selectedSize: 'Talla M',
      selectedPayment: 'Yape'
    },
    {
      id: 3,
      name: 'Canillera Junior',
      price: 25,
      imageUrl: './assets/images/crud/canilleramini.jpg',
      size: 'Talla L',
      description: 'Alta protección para el pie y la espinilla, diseñada para jugadores de alto rendimiento.',
      paymentOptions: ['Yape', 'AltoKe'],
      selectedQuantity: 1,
      selectedSize: 'Talla L',
      selectedPayment: 'Yape'
    }
  ];

  // Método para actualizar la cantidad de un producto específico
  updateQuantity(id: number, quantity: number): void {
    const product = this.products.find(p => p.id === id);
    if (product) {
      product.selectedQuantity = quantity;
    }
  }

  // Método para enviar el producto, talla, cantidad y métodos de pago a WhatsApp
  sendToWhatsapp(product: any): void {
    const message = `¡Hola! Quiero comprar ${product.selectedQuantity} ${product.name} (${product.selectedSize}). El precio es ${product.price * product.selectedQuantity} Bs. El método de pago es ${product.selectedPayment}.`;
    const phoneNumber = '59160590295'; // Tu número de teléfono
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
