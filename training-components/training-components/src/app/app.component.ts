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
  count = 0
  onChildEvent =() =>{
    this.count = this.count + 1
  }
  
  handleClick(){
    this.onChildEvent()
  }
}
