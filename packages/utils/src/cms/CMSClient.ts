import { ENV } from '../env';
import { GQLRequest } from './GQLRequest';

type Res<T> = {
  [key: string]: T;
};

export class CMSClient {
  private gql: GQLRequest;
  constructor() {
    this.gql = new GQLRequest(ENV.HYGRAPH_ENDPOINT);
  }
}
