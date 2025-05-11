import { Component, OnInit } from '@angular/core';
import { ApNavBarComponent } from "../../components/ap-nav-bar/ap-nav-bar.component";
import { ApTitlesComponent } from "../../components/ap-titles/ap-titles.component";
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { ApExpandingCardComponent } from "../../components/ap-expanding-card/ap-expanding-card.component";
import { ApSkillsMarqueeComponent } from "../../components/ap-skills-marquee/ap-skills-marquee.component";


@Component({
  selector: 'app-home',
  imports: [ApNavBarComponent, ApTitlesComponent, CommonModule, ApExpandingCardComponent, ApSkillsMarqueeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s 2s ease-in-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('fade2', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s 1s ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  isLoading: boolean = true;
  services: string = 'Services';
  about: string = 'about me';
  experience: string = "experience";
  skills: string = "skills";

  cards = [
    { number: "01", icon: 'draw', icon_alternate: 'palette', title: 'design', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { number: "02", icon: 'code', icon_alternate: 'developer_mode', title: 'code', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { number: "03", icon: 'support_agent', icon_alternate: 'emoji_people', title: 'support', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
  ]
  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}

