// Interface TypeScript para definir la estructura de una noticia
// Proporciona tipado fuerte y autocompletado en el IDE
// Asegura que todos los objetos Noticia tengan estas propiedades
export interface Noticia {
  titulo: string; // Título de la noticia
  imagen: string; // URL de la imagen
  texto: string; // Contenido/cuerpo de la noticia
  fecha: Date; // Fecha de publicación
}
