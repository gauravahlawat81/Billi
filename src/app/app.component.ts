import { HttpServiceService } from './http-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Billi';
  data:any="";
  constructor(private http:HttpServiceService){}
  fetchData(){
    console.log("Button clicked");
    
    this.data = this.http.getData('http://localhost:3000/posts');
    console.log("Data value " + this.data);
    

  }
}
