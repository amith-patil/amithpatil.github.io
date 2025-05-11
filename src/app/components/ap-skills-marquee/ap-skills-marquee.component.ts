
import { CommonModule } from '@angular/common';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-ap-skills-marquee',
  imports: [MatIconModule,CommonModule ],
  templateUrl: './ap-skills-marquee.component.html',
  styleUrl: './ap-skills-marquee.component.css',
  animations: [
    trigger('testMarquee', [
      transition("* => *", animate('50s', keyframes([
        style({transform: "translateX(0%)"}),
        style({transform: "translateX(-100%)"})
      ])))
    ]),
  ],
  standalone: true
})
export class ApSkillsMarqueeComponent {
  animState = false;
  items = [
    "typescript",
    "angular",
    "go",
    "bash",
    "tailwind",
    "html",
    "css",
    "python",
    "figma",
  ]
}
