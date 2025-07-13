// Importaciones necesarias para el componente
import { Component } from '@angular/core';
import { Noticia } from '../interfaces/noticia'; // Interface para tipado fuerte
import { CommonModule } from '@angular/common'; // Para *ngFor, *ngIf y pipes
import { FormsModule } from '@angular/forms'; // Para [(ngModel)] y formularios

@Component({
  selector: 'app-blog', // Selector para usar el componente
  imports: [CommonModule, FormsModule], // Módulos necesarios para standalone component
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  // Propiedades públicas accesibles desde el template
  // Array que almacena todas las noticias del blog
  public publicaciones: Noticia[];
  // Objeto para capturar datos del formulario de nueva noticia
  public nuevaNoticia: Noticia;
  // Controla la visibilidad del formulario colapsable
  public mostrarFormulario: boolean = false;
  constructor() {
    // Inicialización de datos de ejemplo para mostrar en la aplicación
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

    // Inicialización del objeto para nueva noticia con valores vacíos
    // Se conecta con [(ngModel)] en el formulario
    this.nuevaNoticia = {
      titulo: '',
      texto: '',
      imagen: '',
      fecha: new Date(),
    };
  }

  // Método para alternar la visibilidad del formulario
  // Conectado con (click) en el template
  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  // Método para agregar una nueva noticia al blog
  // Conectado con (ngSubmit) del formulario
  agregarNoticia() {
    // Validación de campos obligatorios (doble seguridad además del HTML required)
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

    // Agregar la nueva noticia al array de publicaciones
    // Usamos spread operator (...) para crear una copia del objeto
    // Esto previene modificaciones no deseadas al limpiar el formulario
    this.publicaciones.push({
      ...this.nuevaNoticia,
      fecha: new Date(), // Fecha actual de publicación
    });

    // Limpiar el formulario reiniciando el objeto nuevaNoticia
    // El two-way binding [(ngModel)] actualizará automáticamente la vista
    this.nuevaNoticia = {
      titulo: '',
      texto: '',
      imagen: '',
      fecha: new Date(),
    };

    // Log para debugging (se puede remover en producción)
    console.log('¡Nueva noticia publicada!', this.publicaciones);
  }
}
