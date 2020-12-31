import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [`
      div{
         margin: 0 auto;
         text-align: center;
      }
      .rotate{
          width: 340px;
          heigh: 82px;
         border:solid 1px red;
      }
   `],
  animations: [
    trigger('myanimation', [
      state('smaller', style({
        transform: 'translateY(100px)'
      })),
      state('larger', style({
        transform: 'translateY(0px)'
      })),
      transition('smaller <=> larger', animate('300ms ease-in'))
    ])
  ]
})
export class AppComponent {
  constructor(private myservice: MyserviceService, private http: HttpClient) { }
  title = 'bai1';
  todaydate;
  propertyService;
  results;
  formdata;
  username;
  ngOnInit() {
    this.todaydate = this.myservice.getTodayDate();
    this.myservice.myProperty = "myProperty: App Component";
    this.propertyService = this.myservice.myProperty;

    this.http.get("http://jsonplaceholder.typicode.com/users").subscribe(data => {
      console.log(data);
      this.results = data;
    });

    this.formdata = new FormGroup({
      username: new FormControl("Freetuts.net", Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ])),
      pwd: new FormControl("abcd1234", this.pwdLengthValidator)
    });
  }

  pwdLengthValidator(control) {
    if (control.value.length < 6) {
      return { pwd: true };
    }
  }

  // onClickSubmit(data) {
  //   alert("Username bạn vừa nhập là : " + data.username);
  // }

  onClickSubmit(data) { this.username = data.username; }

  state: string = "smaller";
  animate() {
    this.state = this.state == 'larger' ? 'smaller' : 'larger';
  }
}
