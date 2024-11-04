import emailjs from "@emailjs/browser";

interface EmailData {
  [key: string]: string;
  user_name: string;
  user_email: string;
  user_subject: string;
  message: string;
}

const emailConfig = {
  serviceId: "service_ytcf4kr",
  templateId: "template_jycn3xn",
  publicKey: "psgeH9Sn3HF-ug0Wv",
};

export const sendEmail = async (data: EmailData) => {
  return emailjs.send(
    emailConfig.serviceId,
    emailConfig.templateId,
    data,
    emailConfig.publicKey
  );
};