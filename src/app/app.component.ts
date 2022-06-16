import { Component } from '@angular/core';


interface Student {   
  name: String;  
  mail: String;  
  gender: String; 
  phone: Number;
  college: String;
  roll: Number;
  branch: String;

}  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeDynamicForm';

}
