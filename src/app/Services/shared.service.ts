import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  private toggleSidebar: BehaviorSubject<any> = new BehaviorSubject({});
  private hideSidebarTotally:BehaviorSubject<any> = new BehaviorSubject({});
  constructor() { }

  setToggle(data:any) {
    //console.log('servicetest', data);
    this.toggleSidebar.next(data);
  }
  getToggle(): Observable<any> {
    return this.toggleSidebar.asObservable()
  }
  setsideToggle(data:any){
    //console.log('mdata',data)
    this.hideSidebarTotally.next(data);
  }
  getsideToggle(): Observable<any>{
    return this.hideSidebarTotally.asObservable()
  }
}
