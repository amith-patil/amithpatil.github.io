import { Component } from '@angular/core';
import { ApExpandingCardComponent } from "../../components/ap-expanding-card/ap-expanding-card.component";
import { ApNavBarComponent } from "../../components/ap-nav-bar/ap-nav-bar.component";
import { ApSkillsMarqueeComponent } from "../../components/ap-skills-marquee/ap-skills-marquee.component";
import { ApTitlesComponent } from "../../components/ap-titles/ap-titles.component";

@Component({
  selector: 'app-components-page',
  imports: [ApNavBarComponent, ApExpandingCardComponent, ApSkillsMarqueeComponent, ApTitlesComponent],
  templateUrl: './components-page.component.html',
  styleUrl: './components-page.component.css'
})
export class ComponentsPageComponent {
  icon_value:string = 'code'
  change_logo(isExpanded:boolean) {
    if(!isExpanded) {
      this.icon_value = "code";
    }
    else
    {
      this.icon_value = "developer_mode";
    }
  }
  card_number: string = "01.";
  
  title:string = "CODE";
  content_text: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";
  section_title: string = "About Me";


}
