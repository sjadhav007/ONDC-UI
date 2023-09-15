import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  collapseSidebar: boolean = true;
  collapseSideSidebar: boolean = false;

  constructor(private sharedService:SharedService){}

  ngOnInit(): void {
    this.sharedService.getToggle().subscribe(result => {
      this.collapseSidebar = !this.collapseSidebar;
      if (result.response == 'mobile') {
        this.sidebarclose();
      }

      //console.log('toggle', this.collapseSidebar);
    });
  }
  sidebarclose() {
    this.sharedService.getsideToggle().subscribe(data => {
      //console.log('data', data);
      if (data == 'sidbarclicked') {
        this.collapseSidebar = !this.collapseSidebar;
      }
      // if(data ==  {}){


      // }
    });
  }
}
