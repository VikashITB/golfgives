export function verifyWebhook(
  signature?: string
) {
  return Boolean(signature);
}
