import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return { msg: 'hellow signin' };
  }
  signup() {
    return { msg: 'hellow signup' };
  }
}
