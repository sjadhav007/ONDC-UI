import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showTab: number =1;
  showProductDropdown = false;
  
  constructor(){

  }

  dashboard(){
    this.showTab=1;
  }
  productionManagement(){
    this.showTab = 2;
  }

  toggleProductDropdown(): void {
    this.showProductDropdown = !this.showProductDropdown;
  }
  orderManagement(){
    
  }
  salesTrackingAndReports(){
    
  }
  inventoryManagememnt(){
    
  }
  customerInteractions(){
    
  }
  paymentCollection(){
    
  }
  vendorMarketPlace(){
    
  }
  promotions(){
    
  }
}
