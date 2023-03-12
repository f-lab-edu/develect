declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    DB_USERNAME: string
    DB_PASSWORD: string
    DB_HOST: string
    DB_PORT: string
    DB_NAME: string
    DATABASE_URL: string
    GOOGLE_CLIENT_ID: string
    GOOGLE_CLIENT_SECRET: string
  }
}
