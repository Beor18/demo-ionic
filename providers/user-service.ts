import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
  data: any;

  constructor(private http: Http) {
    this.data = null;
  }


  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // Hacemos la solicitud correspondiente
    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api/?results=25')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.results;
          resolve(this.data);
        });
    });
  }
}