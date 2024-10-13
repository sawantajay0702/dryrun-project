import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentRegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stdudent-reg';
}
