import { Module } from '@nestjs/common';
import { MaintenanceRequestModule } from '../maintenance-request/maintenance-request.module';
import { AuthModule } from './auth/auth.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MaintenanceRequestModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
