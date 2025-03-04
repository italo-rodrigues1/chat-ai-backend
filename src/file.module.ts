import { Module } from '@nestjs/common';
import { FileController } from './presentation/controllers/file.controller';
// import { FileService } from './application/services/file.service';
// import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
// import { PrismaFileRepository } from './infrastructure/database/prisma-file.repository';
// import { LocalFileStorageService } from './infrastructure/storage/local-file-storage.service';

@Module({
  controllers: [FileController],
  providers: [
    // FileService,
    // LocalFileStorageService,
    // { provide: 'FileRepository', useClass: PrismaFileRepository },
    // PrismaService,
  ],
})
export class FileModule {}
