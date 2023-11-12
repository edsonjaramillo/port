import { ENV } from '../env';
import { Asset, CMSImage, Project } from '../types';
import { GQLRequest } from './GQLRequest';
import { Query } from './Query';

type Res<T> = {
  [key: string]: T;
};

export class CMSClient {
  private gql: GQLRequest;
  constructor() {
    this.gql = new GQLRequest(ENV.HYGRAPH_ENDPOINT);
  }

  async getProjects() {
    const { projects } = await this.gql.request<Res<Project[]>>(Query.getProjects);
    return projects;
  }

  async getProjectBySlug(slug: string) {
    const { project } = await this.gql.request<Res<Project>>(Query.getProjectBySlug, {
      variables: { slug },
    });
    return project;
  }

  async getAllImageAssets() {
    const { assets } = await this.gql.request<Res<CMSImage[]>>(Query.getAssets);
    return assets;
  }

  async updateBlurDataURL(id: string, blur: string) {
    await this.gql.request<Res<string>>(Query.updateBlur, {
      variables: {
        id,
        blurDataUrl: blur,
      },
    });
  }

  async publishAsset(id: string) {
    await this.gql.request<Res<any>>(Query.publishAsset, {
      variables: {
        id,
      },
    });
  }
}
