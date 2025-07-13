import { Component, signal } from '@angular/core';
import { Blog } from './blog/blog';

@Component({
  selector: 'app-root',
  imports: [Blog],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('mi-blog-angular');
}
