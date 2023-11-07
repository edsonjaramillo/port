export class ENV {
  static NODE_ENV = process.env.NODE_ENV as 'development' | 'production' | 'test';
  static NAME = process.env.NAME as string;
  static URL = process.env.URL as string;
  static HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT as string;
  static BUILDING = process.env.BUILDING === 'true' ? true : false;
  static BEARER_TOKEN = process.env.BEARER_TOKEN as string;
  static EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID as string;
  static EMAILJS_PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY as string;
  static EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY as string;
  static EMAILJS_NEW_VISITOR_TEMPLATE = process.env.EMAILJS_NEW_VISITOR_TEMPLATE as string;
}
