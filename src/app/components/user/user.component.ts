import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:{ id: string; name: string; } | undefined ;
  constructor(private activeroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.user={
      id:this.activeroute.snapshot.params['id'],
      name:this.activeroute.snapshot.params['name']
    }

    //through subscribe params
    this.activeroute.params.subscribe((data:Params)=>{
      this.user={
        id:data['id'],
        name:data['name']
      }
    })
    //through snapshot query and fragment
    console.log(this.activeroute.snapshot.queryParams);
    console.log(this.activeroute.snapshot.fragment);

    //through subsribe
    this.activeroute.queryParams.subscribe((data)=>{
      console.log(data);
    })
    this.activeroute.fragment.subscribe((data)=>{
      console.log(data);
    })

  }
  getRamaDetails(){
    this.router.navigate(['/users',5,"Rama"],{queryParams:{page:1,search:"Leela"},fragment:"loading"})
  }

  
  // onUserEdit(){
  //   this.router.navigate(['/users',this.user?.id,this.user?.name,'edit'])
  // }

  //preserving
  onUserEdit(){
    this.router.navigate(['/users',this.user?.id,this.user?.name,'edit'],{queryParamsHandling:'preserve'})
  }
}
