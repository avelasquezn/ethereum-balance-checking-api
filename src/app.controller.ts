import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('balance/:address')
  async addressBalance(@Param('address') address: string): Promise<number> {
    return await this.appService.getBalance(address);
  }
}
