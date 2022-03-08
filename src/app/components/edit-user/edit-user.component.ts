import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDeactivateGuard } from 'src/app/service/guards/deactivate-guard.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit,IDeactivateGuard {

  constructor() { }

  ngOnInit(): void {
  }
  canExit(){
    if(confirm("Are you sure  you want  to exit")){
      return true;
    }return false;
  }

}
