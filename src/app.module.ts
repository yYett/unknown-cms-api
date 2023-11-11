import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import database from './config/database';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   load: [database],
    // }),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     uri: configService.get<string>('database.host'),
    //   }),
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
