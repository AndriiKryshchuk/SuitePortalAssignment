import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { AuthDto } from './dto';
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
    const user = {password: '123456', email: 'admin@test.test'}
    
    const password = user.password;

    try {
      const userId = await this.authDao.createNewAdminUser({
        email: user.email,
        password,
      });      

      return this.signToken(userId, dto.email);
    } catch (error) {
          throw new ForbiddenException(
            'Credentials error',
          );
    }
  }

  async signin(dto: AuthDto) {
    
    const user = await this.authDao.getAdminUserByEmail(dto.email);
    console.log('signin: ', {dto, user});


    if (!user)
      throw new ForbiddenException(
        'Credentials incorrect USER',
      );

    const pwMatches = dto.password === user.password;

    if (!pwMatches)
      throw new ForbiddenException(
        'Credentials incorrect PASSWORD',
      );
    return await this.signToken(user.id, user.email);
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
