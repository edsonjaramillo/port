import { AnyObject } from './API';
import { ENV } from './env';

type EmailJSResponse = {
  status: number;
  text: string;
};

export type UniqueVisitorEmail = {
  date: string;
  city: string;
  country: string;
  region: string;
};

export class EmailJS {
  static async sendEmail<T>(template_id: string, template_params: T): Promise<EmailJSResponse> {
    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          template_id,
          template_params,
          service_id: ENV.EMAILJS_SERVICE_ID,
          user_id: ENV.EMAILJS_PUBLIC_KEY,
          accessToken: ENV.EMAILJS_PRIVATE_KEY,
        }),
      });

      const data = await res.json();

      return { status: data.status, text: data.text };
    } catch (error) {
      return { status: 500, text: 'Error occured' };
    }
  }
}
