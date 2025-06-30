import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'hola-angular-xd';
  enabled : boolean = true;

  courses : string[] = [
    'Curso 1',
    'Curso 2',
    'Curso 3',
    'Curso 4'
  ]

  setEnabled(){
    this.enabled = !this.enabled
  }
}
