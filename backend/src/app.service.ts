import { Injectable } from '@nestjs/common';
import { x } from '@core';
@Injectable()
export class AppService {
  getHello(): string {
    return ' oiee!' + x;
  }
}
