import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home/home.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{  
  isLoading:boolean = true;


}
