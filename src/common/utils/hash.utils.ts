import { hash, compare } from 'bcryptjs';

export function generateHash(input: string): Promise<string> {
  return hash(input, 10);
}

export function compareHash(input: string, hashed: string): Promise<boolean> {
  return compare(input, hashed);
}
