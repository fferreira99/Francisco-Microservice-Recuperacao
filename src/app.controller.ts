import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { DadosCliente } from './interfaces/interface_microservice';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  logger = new Logger (AppController.name)

  @EventPattern('ola')
  getHello(@Payload() texto:string) {
    this.logger.log(texto)
  }

  @EventPattern('transferPix')
  enviarPix(@Payload() dadosCliente:DadosCliente){
    this.logger.log(JSON.stringify(dadosCliente))
    return this.appService.enviarNovoPix(dadosCliente)
  }
 
}