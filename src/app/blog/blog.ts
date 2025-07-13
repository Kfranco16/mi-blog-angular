import { Component } from '@angular/core';
import { Noticia } from '../interfaces/noticia';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  // 2. Creamos y definimos el tipo de la propiedad
  public publicaciones: Noticia[];
  public nuevaNoticia: Noticia;
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
    this.nuevaNoticia = {
      titulo: '',
      texto: '',
      imagen: '',
      fecha: new Date(),
    };
  }
  agregarNoticia() {
    // 1. Validación (aunque el botón está deshabilitado, es una buena práctica)
    if (
      !this.nuevaNoticia.titulo ||
      !this.nuevaNoticia.texto ||
      !this.nuevaNoticia.imagen
    ) {
      alert(
        'Todos los campos son obligatorios. Por favor, completa el formulario.'
      );
      return; // Detiene la ejecución si la validación falla
    }

    // 2. Añadimos la nueva publicación al array.
    // Usamos el 'spread operator' (...) para crear una COPIA del objeto.
    // ¡Esto es crucial para que al limpiar el formulario no se modifique el post ya añadido!
    // También actualizamos la fecha al momento exacto de la publicación.
    this.publicaciones.push({
      ...this.nuevaNoticia,
      fecha: new Date(),
    });

    // 3. Reiniciamos el objeto nuevaNoticia para limpiar los campos del formulario.
    // Gracias al two-way binding, la vista se actualizará automáticamente.
    this.nuevaNoticia = {
      titulo: '',
      texto: '',
      imagen: '',
      fecha: new Date(),
    };

    console.log('¡Nueva noticia publicada!', this.publicaciones);
  }
}
