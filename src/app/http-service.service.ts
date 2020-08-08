import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor( private http:HttpClient) { }

  getData(url:string){
    this.http.get(url).subscribe(res=>{
      console.log("Result got");
      console.log(res);
      
      return res;
    })
  }
}
