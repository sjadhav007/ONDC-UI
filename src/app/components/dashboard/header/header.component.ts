import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificationsComponent } from '../notifications/notifications.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showTab: number =1;
  constructor(private router:Router, private dialog:MatDialog){
    
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
      width:'20%',
      position: { right: '350px', top: '50px', },
      backdropClass: 'cdk-overlay-transparent-backdrop',
      // panelClass: '',

    });
    dialogRef.backdropClick().subscribe(() => {
        // Close the dialog
        dialogRef.close();
    })
  }
}
