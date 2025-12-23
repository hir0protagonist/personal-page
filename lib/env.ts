const ENV_VARS: Record<string, string | undefined> = {
    S3_ENDPOINT: process.env.S3_ENDPOINT,
    S3_REGION: process.env.S3_REGION,
    S3_SECRET_KEY: process.env.S3_SECRET_KEY,
    S3_KEY_ID: process.env.S3_KEY_ID,
    S3_BUCKET: process.env.S3_BUCKET,
};

export const env: Record<string, string> = Object.keys(ENV_VARS).reduce(
    (acc, k) => ({ ...acc, [k]: ENV_VARS[k] || '' }),
    {}
);
