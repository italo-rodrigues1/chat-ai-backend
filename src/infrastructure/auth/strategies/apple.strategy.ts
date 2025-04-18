// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy, VerifyCallback } from 'passport-apple';
// import { ConfigService } from '@nestjs/config';

// @Injectable()
// export class AppleStrategy extends PassportStrategy(Strategy, 'apple') {
//   constructor(private configService: ConfigService) {
//     super({
//       clientID: configService.get<string>('APPLE_CLIENT_ID'),
//       teamID: configService.get<string>('APPLE_TEAM_ID'),
//       keyID: configService.get<string>('APPLE_KEY_ID'),
//       privateKeyString: configService.get<string>('APPLE_PRIVATE_KEY'),
//       callbackURL: configService.get<string>('APPLE_CALLBACK_URL'),
//       scope: ['name', 'email'],
//     });
//   }

//   validate(
//     accessToken: string,
//     refreshToken: string,
//     profile: any,
//     done: VerifyCallback,
//   ) {
//     const { name, email } = profile;
//     const user = {
//       email: email,
//       firstName: name?.firstName || '',
//       lastName: name?.lastName || '',
//       accessToken,
//     };
//     done(null, user);
//   }
// }
