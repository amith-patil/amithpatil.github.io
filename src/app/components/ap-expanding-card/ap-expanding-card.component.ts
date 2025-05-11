import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ap-expanding-card',
  imports: [MatIconModule,CommonModule],
  templateUrl: './ap-expanding-card.component.html',
  styleUrl: './ap-expanding-card.component.css',
  animations: [
    trigger('inOutAnimation', [
      state("false", style({ opacity: 0, height: 0 })),
      state("true", style({})),
      transition("* => *", animate("300ms ease-in-out"))
    ]),
  ],
  //standalone: true
})
export class ApExpandingCardComponent implements OnInit{
  @Input() expanded: boolean = false;
  card_icon:string;
  
  @Output() isExpanded = new EventEmitter<boolean>();

  @Input() card_number: string;
  @Input() icon: string;
  @Input() icon_expanded: string
  @Input() title: string;
  @Input() content: string;

  constructor() {
    this.card_number="";
    this.icon="";
    this.icon_expanded="";
    this.title="";
    this.content="";
   this.card_icon="";
  }
  ngOnInit(): void {
    if(this.expanded == false) {
      this.card_icon = this.icon;
    }
    else {
      this.card_icon = this.icon_expanded;
    }
  }

  

  expand() {
    this.expanded = !this.expanded;
    if(this.expanded == false) {
      this.card_icon = this.icon;
    }
    else {
      this.card_icon = this.icon_expanded;
    }
    this.isExpanded.emit(this.expanded);
  }

}
