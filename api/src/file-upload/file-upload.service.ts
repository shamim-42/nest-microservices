import { Injectable, Req, Res } from '@nestjs/common';
import Client from "ftp-ts";


@Injectable()
export class FileUploadService {

  uploadFile = (input_file, @Req() req, @Res() res) => {
    const credentials = {
      host: "192.140.252.57",
      port: 21,
      user: "ftpshamim",
      password: "ftpshamim123"
    }

    Client.connect(credentials).then(async (ftp) => {
      console.dir(await ftp.list());
      let test = ftp.append(input_file, "my_file.jpg");
      console.log("Now we inside file-upload service");
      return res.status(500).json(req.files[0].location);
      console.log(test)
      ftp.end();
    });
  }
}
