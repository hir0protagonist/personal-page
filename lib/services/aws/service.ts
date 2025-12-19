import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';

export const AwsService = {
    s3Client: new S3Client({
        endpoint: process.env.S3_ENDPOINT,
        region: process.env.S3_REGION,
        credentials: {
            secretAccessKey: process.env.S3_SECRET_KEY!,
            accessKeyId: process.env.S3_KEY_ID!,
        },
    }),
    bucketName: process.env.S3_BUCKET,
    listObjects: async function () {
        const { Contents } = await this.s3Client.send(
            new ListObjectsV2Command({
                Bucket: this.bucketName,
            })
        );
        const contentsList = Contents!.map((c) => ` • ${c.Key}`).join('\n');
        console.log("Here's a list of files in the bucket:");
        console.log(`${contentsList}\n`);
    },
    getObject: async function (key: string) {
        const { Body } = await this.s3Client.send(
            new GetObjectCommand({
                Bucket: this.bucketName,
                Key: key,
            })
        );
        return Body!.transformToString();
    },
};
