export class Query {
  static getProjects = /* GraphQL */ `
    query GetProjects {
      projects {
        id
        title
        slug
        mainImage {
          id
          url
          alt
          blurDataUrl
        }
      }
    }
  `;

  static getProjectBySlug = /* GraphQL */ `
    query GetProjectBySlug($slug: String!) {
      project(where: { slug: $slug }) {
        id
        title
        slug
        description
        mainImage {
          id
          url
          width
          height
          alt
          blurDataUrl
        }
        supportingImages {
          id
          url
          width
          height
          alt
          blurDataUrl
        }
        githubUrl
        websiteUrl
      }
    }
  `;

  static getAssets = /* GraphQL */ `
    query GetAllImageAssets {
      assets(where: { blurDataUrl: null, mimeType_starts_with: "image" }) {
        id
        mimeType
        url
        fileName
        blurDataUrl
      }
    }
  `;

  static updateBlur = /* GraphQL */ `
    mutation UpdateBlurDataUrl($id: ID!, $blurDataUrl: String!) {
      updateAsset(where: { id: $id }, data: { blurDataUrl: $blurDataUrl }) {
        id
        blurDataUrl
      }
    }
  `;

  static publishAsset = /* GraphQL */ `
    mutation PublishAsset($id: ID!) {
      publishAsset(to: PUBLISHED, where: { id: $id }) {
        id
      }
    }
  `;
}
