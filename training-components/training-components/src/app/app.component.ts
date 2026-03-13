import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'training-components';
  let counter = 0;
  const countHandler = () => {
    counter = counter + 1;
  }
  onClick(countHandler())
}
