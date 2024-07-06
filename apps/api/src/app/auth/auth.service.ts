import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { AuthDto } from './dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthDao } from './auth.dao';


@Injectable()
export class AuthService {
  jwtSecret = 'super-secret'
  constructor(
    private jwt: JwtService,
    private readonly authDao: AuthDao,
  ) {}

  async signup(dto: AuthDto) {
    const user = {password: '123456', email: 'admin@TextDecoderStream.test'}
    
    const hash = await bcrypt.hash(user.password, 10);

    try {
      const userId = await this.authDao.createNewAdminUser({
        email: user.email,
        hash,
      });      

      return this.signToken(userId, dto.email);
    } catch (error) {
          throw new ForbiddenException(
            'Credentials error',
          );
    }
  }

  async signin(dto: AuthDto) {
    console.log('SIGNIN SERV', dto);
    
    const user = await this.authDao.getAdminUserByEmail(dto.email);

    if (!user)
      throw new ForbiddenException(
        'Credentials incorrect',
      );

    const pwMatches = await bcrypt.compare(dto.password, user.hash);

    if (!pwMatches)
      throw new ForbiddenException(
        'Credentials incorrect',
      );
    return this.signToken(user.id, user.email);
  }

  async signToken(
    userId: string,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };

    const token = await this.jwt.signAsync(
      payload,
      {
        expiresIn: '15m',
        secret: this.jwtSecret,
      },
    );

    return {
      access_token: token,
    };
  }
}
