import { Component } from '@angular/core';
import { Noticia } from '../interfaces/noticia';
import { DatePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [DatePipe, CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  // 2. Creamos y definimos el tipo de la propiedad
  public publicaciones: Noticia[];

  constructor() {
    // 3. Inicializamos la propiedad con datos de ejemplo
    this.publicaciones = [
      {
        titulo:
          'Descubren Nueva Especie Marina en las Profundidades del Pacífico',
        imagen:
          'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg',
        texto:
          'Un equipo de científicos ha reportado el hallazgo de una criatura bioluminiscente que habita a más de 3,000 metros de profundidad...',
        fecha: new Date('2025-07-12'),
      },
      {
        titulo: 'La IA Generativa Revoluciona el Mundo del Arte Digital',
        imagen:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg',
        texto:
          'Artistas de todo el mundo están adoptando herramientas de inteligencia artificial para crear obras que desafían la imaginación...',
        fecha: new Date('2025-07-10'),
      },
    ];
  }
}
