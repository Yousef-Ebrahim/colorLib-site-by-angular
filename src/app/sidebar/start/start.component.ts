import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
constructor(private _router:Router){

}
navigate(path:string):void {
  this._router.navigate([`${path}`])
}
}
