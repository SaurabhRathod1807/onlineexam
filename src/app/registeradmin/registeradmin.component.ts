import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminUser, AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeradmin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registeradmin.component.html',
  styleUrl: './registeradmin.component.css'
})
export class RegisteradminComponent {

  adminuser:AdminUser= new AdminUser('','','','');

  constructor(private adminservice:AdminserviceService,private router:Router){

  }
  login(){
    this.router.navigate(['loginadmin']);
  }

  adminsave(){
      this.adminservice.adminsave(this.adminuser).subscribe();
     this.router.navigate(['loginadmin']);
     sessionStorage.setItem("message","The Admin Successfully Register!, Now LogIn Here");

  }
}
