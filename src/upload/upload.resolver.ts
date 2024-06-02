import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UploadFilesArgs } from './args/upload-files.args';

@Resolver('Upload')
export class UploadResolver {
  @Mutation()
  async filesUpload(@Args() { files }: UploadFilesArgs): Promise<boolean> {
    console.log(files.length);
    return true;
  }

  @Query()
  health() {
    return 'Hello world';
  }
}
