import { S3Client, S3ClientConfig } from '@aws-sdk/client-s3';

export function createS3Client(config?: S3ClientConfig) {
    return new S3Client({
        region: process.env.AWS_REGION,
        ...config,
    });
}
