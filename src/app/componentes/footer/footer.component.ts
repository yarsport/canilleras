import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-black text-white py-10">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

          <!-- Sección de Enlaces -->
          <div class="space-y-4">
            <h3 class="text-xl font-semibold">Enlaces Rápidos</h3>
            <ul class="space-y-2">
              <li><a href="#tienda" class="text-white hover:text-gray-400 transition duration-300">Tienda</a></li>
              <li><a href="#contact" class="text-white hover:text-gray-400 transition duration-300">Contacto</a></li>
            </ul>
          </div>

          <!-- Sección de Redes Sociales -->
          <div class="space-y-4">
            <h3 class="text-xl font-semibold">Síguenos</h3>
            <div class="flex space-x-6">
              <a href="https://www.facebook.com/yarsportbo" target="_blank" class="text-white hover:text-gray-400 transition duration-300">
            <i class="fab fa-facebook-f"></i>
              </a>

              <a href="https://www.tiktok.com/@yarsportbo" target="_blank" class="text-white hover:text-gray-400 transition duration-300">
                <i class="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          <!-- Sección de Información -->
          <div class="space-y-4">
            <h3 class="text-xl font-semibold">Información</h3>
            <ul class="space-y-2">
              <li><a href="/privacy-policy" class="text-white hover:text-gray-400 transition duration-300">Política de Privacidad</a></li>
              <li><a href="/terms" class="text-white hover:text-gray-400 transition duration-300">Términos y Condiciones</a></li>
            </ul>
          </div>

        </div>

        <!-- Derechos de autor -->
        <div class="mt-8 text-center text-gray-400">
          <p>&copy; 2025 Yar CANILLERAS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {}
