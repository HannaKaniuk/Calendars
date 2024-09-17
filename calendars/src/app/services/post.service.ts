import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
};
}


@Injectable()
export class PostService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _httpClient: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this._httpClient.get<User[]>(this.apiUrl);
  }
}

