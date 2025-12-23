import { createS3Client } from '@/lib/s3';
import { env } from '@/lib/env';
import { createStorageService } from './storage.service';

export const storageService = createStorageService({
    s3Client: createS3Client({
        endpoint: env.S3_ENDPOINT,
        region: env.S3_REGION,
        credentials: {
            secretAccessKey: env.S3_SECRET_KEY,
            accessKeyId: env.S3_KEY_ID,
        },
    }),
    bucket: env.S3_BUCKET,
});
