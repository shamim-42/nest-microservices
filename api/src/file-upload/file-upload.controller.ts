import { Controller, Post, Req, Res } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import * as multer from 'multer';

@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService){}


  @Post('/image')
  async saveFile(@Req() request, @Res() response ) {
    const file = multer().single("akbarkhan");
    console.log("We are now inside File Upload controller");
    console.log(file)
    try{
      await this.fileUploadService.uploadFile(file);
    } catch (error) {
      return response.status(500).json(`Failed to upload. Error: ${error.message}`);
    }
  }

}
