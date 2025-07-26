import { google } from 'googleapis';

export type GmailConfig = {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  refreshToken: string;
};

export function getGmailClient(config: GmailConfig) {
  const { clientId, clientSecret, redirectUri, refreshToken } = config;
  const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
  oAuth2Client.setCredentials({ refresh_token: refreshToken });
  return google.gmail({ version: 'v1', auth: oAuth2Client });
}

export async function sendGmailMessage(config: GmailConfig, raw: string) {
  const gmail = getGmailClient(config);
  await gmail.users.messages.send({ userId: 'me', requestBody: { raw } });
}

export async function listGmailMessages(config: GmailConfig, query?: string) {
  const gmail = getGmailClient(config);
  const res = await gmail.users.messages.list({ userId: 'me', q: query });
  return res.data.messages ?? [];
}
