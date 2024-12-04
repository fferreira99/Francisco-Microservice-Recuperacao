import { Injectable } from '@nestjs/common';
import { DadosCliente } from './interfaces/interface_microservice';

@Injectable()
export class AppService {
  [x: string]: any;
  getHello(): string {
    return 'Hello World!';
  }

  async depositarPix(novoPix:DadosCliente){
    return await this.prismaService.create({
      data:novoPix
    })
  }
}
