import { AuthService } from '../auth.service';
import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import {
  ExtractJwt,
  Strategy,
} from 'passport-jwt';
import { AuthDao } from '../auth.dao';
// import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(
  Strategy,
  'jwt',
) {
  constructor(
    private readonly authService: AuthService,
    private readonly authDao: AuthDao,

  ) {
    super({
      jwtFromRequest:
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: authService.jwtSecret,
    });
  }

  async validate(payload: {
    sub: string;
    email: string;
  }) {
    // const user =
    //   await this.prisma.user.findUnique({
    //     where: {
    //       id: payload.sub,
    //     },
    //   });
    const user = await this.authDao.getAdminUserById(payload.sub);
    delete user.hash;
    return user;
  }
}
