import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificationsComponent } from '../notifications/notifications.component';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  showTab: number =1;
  collapseSidebar: boolean =false;
  constructor(private router:Router, private dialog:MatDialog,private sharedService:SharedService){
    
  }

  ngOnInit(): void {
    this.sharedService.getToggle().subscribe(data => {
      if (data) {
       this.collapseSidebar=!this.collapseSidebar
      }
    }
    )
  }
  addProduct(){
    this.router.navigate(['/dashboard/addProduct'])
  }
  dashboard() {
    this.showTab = 1; 
    this.router.navigate(['/dashboard/home'])
  } 
  productManagement() { 
    this.showTab = 2; 
  } 
  orderManagement() {
    this.showTab = 3; 
   } 
  salesTrackingAndReports() {
    this.showTab = 4; 
   } 
  inventoryManagememnt() { 
    this.showTab = 5; 
  } 
  customerInteractions() { 
    this.showTab = 6;
  } 
  paymentCollection() { 
    this.showTab = 7;
  } 
  vendorMarketPlace() {
    this.showTab = 8;
   } 
  promotions() {
    this.showTab = 9;
   }

   openPopup(){
    // this.router.navigate(['/dashboard/notifications'])
    const dialogRef=this.dialog.open(NotificationsComponent, {
      hasBackdrop: true,
      width:'25%',
      position: { right: '295px', top: '50px', },
      backdropClass: 'cdk-overlay-transparent-backdrop',
      // panelClass: '',

    });
    dialogRef.backdropClick().subscribe(() => {
        // Close the dialog
        dialogRef.close();
    })
  }
}
