import { File } from '@whatwg-node/node-fetch';
import { ArrayMaxSize, IsDefined } from 'class-validator';

export class UploadFilesArgs {
  @IsDefined()
  @ArrayMaxSize(20)
  declare files: File[];
}
