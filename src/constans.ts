/**
 * Constant vars of the application
 *  - Tokens, ports, API URL's, etc.
 */

export const __port__ = process.env.PORT || 5000;
export const __prod__ = process.env.NODE_ENV === 'prod';
export const __disc_token__ = process.env.DISCORD_TOKEN ?? null;