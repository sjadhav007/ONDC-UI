import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  constructor() {}

  sendOtp(phone: string): Observable<string> {
    return new Observable<string>((observer) => {
      setTimeout(() => {
        observer.next('123456');
        observer.complete();
      }, 2000);
    });
  }
}
