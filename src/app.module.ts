import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';
import { GraphQLModule } from '@nestjs/graphql';
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs';
import { createFetch } from '@whatwg-node/fetch';

@Module({
  imports: [
    UploadModule,
    GraphQLModule.forRootAsync<YogaDriverConfig>({
      driver: YogaDriver,
      useFactory: () => ({
        sortSchema: true,
        path: '/graphql',
        typePaths: ['./**/*.graphql'],
        graphiql: true,
        multipart: true,
        fetchAPI: createFetch(),
        buildSchemaOptions: { numberScalarMode: 'integer' },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
