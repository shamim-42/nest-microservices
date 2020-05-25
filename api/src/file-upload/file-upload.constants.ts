import { RequestMethod } from '@nestjs/common';
import { IRoute } from '../app.types';

export const ROUTES: IRoute[] = [
  { path: '/file-upload/', protected: false, method: RequestMethod.POST },
]