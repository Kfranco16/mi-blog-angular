// Componente raíz de la aplicación Angular
import { Component, signal } from '@angular/core';
import { Blog } from './blog/blog'; // Importación del componente Blog

@Component({
  selector: 'app-root', // Selector usado en index.html
  imports: [Blog], // Componente Blog importado para uso en template
  templateUrl: './app.html', // Template del componente
  styleUrl: './app.css', // Estilos del componente
})
export class App {
  // Signal para el título de la aplicación (nuevo sistema de reactividad de Angular)
  protected readonly title = signal('mi-blog-angular');
}
