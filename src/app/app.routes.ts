import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
// Importar todos los componentes standalone
import { HomeComponent } from './general/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Esta es la ruta por defecto
  { path: '**', redirectTo: '' }  // Redirige a HomeComponent si la ruta no coincide
];
export const appRoutingProviders = [
  provideRouter(routes)
];
