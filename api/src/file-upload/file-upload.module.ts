import { Module, MiddlewareConsumer, RequestMethod, Logger } from '@nestjs/common';
import { AuthenticationMiddleware } from '../common/authentication.middleware';

import { FileUploadController } from './file-upload.controller';
import { FileUploadService } from './file-upload.service';
import { ROUTES } from './file-upload.constants';

@Module({
  controllers: [FileUploadController],
  providers: [FileUploadService]
})
export class FileUploadModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes(
        ...ROUTES.filter(r => r.protected)
      )
  }
}
