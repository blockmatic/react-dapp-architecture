// These files help check for presence of required environment variables

import * as env from 'env-var'
import { AppConfig } from '~/app-engine/types/app-config'

export const appconfig: AppConfig = {
  contracts: {},
  services: {
    auth_api: env.get('NEXT_PUBLIC_AUTH_API').required().asString(),
    graphql_api: env.get('NEXT_PUBLIC_GRAPHQL_API').required().asString(),
    graphql_api_key: env.get('NEXT_PUBLIC_GRAPHQL_API_KEY').required().asString(),
    cloudinary_cloud_name: env.get('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME').asString() || '',
    cloudinary_api_key: env.get('NEXT_PUBLIC_CLOUDINARY_API_KEY').asString() || '',
    cloudinary_api_secret: env.get('NEXT_PUBLIC_CLOUDINARY_API_SECRET').asString() || '',
    web3auth_client_id: env.get('NEXT_PUBLIC_WEB3AUTH_CLIENT_ID').asString() || '',
  },
  analytics: {
    google: env.get('NEXT_PUBLIC_GOOGLE_ANALYTICS').asString() || '',
    sentry: env.get('NEXT_PUBLIC_SENTRY_DSN').asString() || '',
  },
  features: {},
}
