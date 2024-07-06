import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  public async signup(@Body() dto: AuthDto) {    
    return await this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/signin')
  public async signin(@Body() dto: AuthDto) {    
    return await this.authService.signin(dto);
  }
}
