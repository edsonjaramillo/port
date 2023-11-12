import { ENV } from '../env';

type GQLOptions = {
  cache?: RequestCache;
  variables?: any;
};

export class GQLRequest {
  constructor(private readonly endpoint: string) {}

  async request<T>(query: string, opts?: GQLOptions): Promise<T> {
    const variables = opts?.variables || {};
    let cache: RequestCache | undefined;
    if (ENV.NODE_ENV === 'development') {
      cache = 'no-cache';
    } else {
      cache = opts?.cache || 'default';
    }

    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${ENV.BEARER_TOKEN}` },
      body: JSON.stringify({ query, variables }),
      cache,
    });

    const json = await response.json();
    if (json.errors) json.errors.map((error: any) => console.log('GQL Error: ', error.message));

    return json.data as T;
  }
}
