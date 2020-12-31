import { Component, INJECTOR, Injector, OnInit, ɵrenderComponent, } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-router-b',
  templateUrl: './router-b.component.html',
  styleUrls: ['./router-b.component.scss']
})
export class RouterBComponent implements OnInit {

  constructor(private route: Router,private injector: Injector) { }

  ngOnInit(): void {

  }
  loadD(): void{
    console.log("may be sometime I will be show!")
    // import("./router-d/router-d.component").then(c=>{
    //   ɵrenderComponent(c.RouterDComponent, {host: 'my-host',injector: this.injector})
    // })
  }
  // gotoD(): void{
  //   this.route.navigate(['/A/B/D']);
  // }
}
