import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';

export function createStorageService({ s3Client, bucket }: { s3Client: S3Client; bucket: string }) {
    function getObject(key: string) {
        return s3Client.send(
            new GetObjectCommand({
                Bucket: bucket,
                Key: key,
            })
        );
    }

    return { getObject };
}
