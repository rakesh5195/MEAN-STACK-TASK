import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { User } from '../../model/user';

const defaultUser = {
  email: 'rakesh@gmail.com',
  password: '123456',
};
// login-context.interface.ts (Create a new file for the interface)
export interface LoginContextInterface {
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(loginContext: LoginContextInterface): Observable<User> {
    const isDefaultUser =
    loginContext.email === defaultUser.email &&
    loginContext.password === defaultUser.password;

  if (isDefaultUser) {
    return of(defaultUser as User); // Assuming defaultUser is a User object
  }

  return throwError('Invalid Email or Password')
  }

  logout(): Observable<boolean> {
    return of(false);
  }
}
