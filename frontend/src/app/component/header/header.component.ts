import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public name="satyam"
  public myid="satyam"
  public greetings="";
  public onClick(){
    console.log("hellow  satyam  kumar");
    this.greetings="satyam aap jinda hain bhosdike";
  }
  public Message(value: any){
    console.log(value);

  }
  public text_success={
    color:"green",
  fontstyle:"italaic"  }

  
  public hasError=true;
  public isSpecial=true;
 

}
