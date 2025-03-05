import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav class="bg-black text-white py-4 shadow-md">
      <div class="max-w-screen-xl mx-auto flex justify-between items-center px-6">
      <a routerLink="/home" class="flex items-center space-x-3">
  <!-- Ícono de FontAwesome: balón de fútbol -->
  <i class="fas fa-futbol text-3xl text-white"></i>
</a>




        <!-- Menú para pantallas grandes -->
        <div class="hidden lg:flex items-center space-x-10">
          <div class="relative group">
            <a href="#store" class="text-white font-semibold text-lg hover:text-gray-400 transition duration-300">Store</a>
            <div class="absolute left-0 hidden mt-2 bg-black text-white rounded-lg shadow-lg w-48 group-hover:block">
              <a href="#store" class="block px-4 py-2 text-sm hover:bg-gray-800 transition duration-300">Canilleras Talla S</a>
              <a href="#store" class="block px-4 py-2 text-sm hover:bg-gray-800 transition duration-300">Canilleras Talla M</a>
              <a href="#store" class="block px-4 py-2 text-sm hover:bg-gray-800 transition duration-300">Canilleras Talla L</a>
            </div>
          </div>
          <a href="#promotion" class="text-white font-semibold text-lg hover:text-gray-400 transition duration-300">Promo</a>
          <a href="#contact" class="text-white font-semibold text-lg hover:text-gray-400 transition duration-300">Contacto</a>
        </div>

        <!-- Botón hamburguesa para móviles -->
        <button (click)="toggleMenu()" class="lg:hidden text-white text-2xl focus:outline-none">
          ☰
        </button>

      </div>

      <!-- Menú móvil -->
      <div *ngIf="isNavbarOpen" class="lg:hidden bg-black text-white absolute top-16 left-0 w-full px-6 py-4 shadow-lg transition-all duration-300 transform ease-in-out opacity-100 z-50">
        <div class="space-y-4">
          <a (click)="closeMenu()" href="#store" class="block text-xl font-semibold hover:text-gray-400">Store</a>
          <a (click)="closeMenu()" href="#promotion" class="block text-xl font-semibold hover:text-gray-400">Promo</a>
          <a (click)="closeMenu()" href="#contact" class="block text-xl font-semibold hover:text-gray-400">Contacto</a>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class HeaderComponent {
  isNavbarOpen = false;

  // Función para alternar el menú hamburguesa en dispositivos móviles
  toggleMenu(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  // Función para cerrar el menú cuando se hace clic en un enlace
  closeMenu(): void {
    this.isNavbarOpen = false;
  }
}
