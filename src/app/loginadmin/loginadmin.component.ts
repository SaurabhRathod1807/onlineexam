import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminUser, AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginadmin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './loginadmin.component.html',
  styleUrl: './loginadmin.component.css'
})
export class LoginadminComponent implements OnInit{
  
  message:any="";
  adminuser:AdminUser= new AdminUser('','','','');
  constructor(private adminsevice:AdminserviceService, private router:Router){


  }
  
  ngOnInit(): void {
    this.message=sessionStorage.getItem("message");
    
  }

  register(){
    this.router.navigate(['registeradmin']);
  }

  admincheck(){
    this.adminsevice.admincheck(this.adminuser).subscribe(answer=>{
      if(answer){
        this.router.navigate(['adminwork']);
        sessionStorage.setItem("username", this.adminuser.username);
        sessionStorage.setItem("message", "Admin sucessfully Login!")
      }
      else{
        this.router.navigate(['loginadmin']);
        this.message="Incorrect Username OR Password";
      }
    });
  }
}
