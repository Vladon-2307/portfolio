import {Component} from '@angular/core';
import {PreviewComponent} from "../../components/preview/preview.component";
import {StackComponent} from "../../components/stack/stack.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {EducationComponent} from '../../components/education/education.component';
import {AboutComponent} from '../../components/about/about.component';
import {ExperienceComponent} from '../../components/experience/experience.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    PreviewComponent,
    EducationComponent,
    StackComponent,
    FooterComponent,
    AboutComponent,
    ExperienceComponent
  ],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.scss'
})
export class HomePageComponent {

}
