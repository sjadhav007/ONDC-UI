import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menucollapse: boolean =false;
  collapseSidebar: any;
  dashboardActive: boolean = false;
  productActive: boolean = false;
  ordersActive: boolean = false;
  tooltipv: boolean =true;
  

  constructor(private sharedService:SharedService,private router:Router){
    this.sharedService.getToggle().subscribe(data => {
      //console.log('sssss', data.collapse);
      if (data) {
        this.tooltipv = !this.tooltipv;
      }
    });
  }
  
  toggleFunctionality() {

    this.menucollapse = !this.menucollapse;
    let obj = {
      response: 'desktop',
      collapse: this.collapseSidebar,
    }
    this.sharedService.setToggle(obj);
  }
  home(){
    this.dashboardActive = true;
    this.productActive = false;
    this.ordersActive = false;
    this.router.navigate(['/dashboard/home']);
  }
  product(){
    this.dashboardActive = false;
    this.productActive = true;
    this.ordersActive = false;
  }
  orders(){
    this.dashboardActive = false;
    this.ordersActive = true;
    this.productActive = false
  }
}
