import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  gender=['Male','Female','Other'];
  Usermodel = new User('tharani','a@any.com',9876543211,'Male','morning',true);
}
