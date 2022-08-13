import crypto from 'crypto';

export default (str: string): string => {
  return crypto.createHash('sha256').update(str).digest('hex');
}