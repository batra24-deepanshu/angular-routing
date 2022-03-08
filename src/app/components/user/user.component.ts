import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:{ id: string; name: string; } | undefined ;
  constructor(private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.user={
      id:this.activeroute.snapshot.params['id'],
      name:this.activeroute.snapshot.params['name']
    }
  }

}
