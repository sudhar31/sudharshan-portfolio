import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class About {
downloadResume() {
    window.open('https://drive.google.com/file/d/15MyHqmeWtE6-GbigKf-qP4y3QbRpCsfW/view?usp=drive_link', '_blank');
  }
}
