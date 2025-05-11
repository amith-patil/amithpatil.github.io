import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ap-titles',
  imports: [CommonModule],
  templateUrl: './ap-titles.component.html',
  styleUrl: './ap-titles.component.css'
})
export class ApTitlesComponent implements OnInit{

@Input() title:string;
@Input() rotate:string;

small_text:string;

constructor(){
  this.title = "";
  this.rotate = "";
  
  this.small_text = "";
 
}
  ngOnInit(): void {
    if(this.rotate == "left") {
      this.small_text = "rotate-90"
    }
    else if(this.rotate == "right") {
      this.small_text = "-rotate-90 -translate-x-full";
    }
  }

}

