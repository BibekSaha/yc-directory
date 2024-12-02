import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function getInitials(name: string) {
  if (name === '') return 'AV';
  const initials = name
    .split(' ')
    .reduce((acc, part) => acc + part.charAt(0).toUpperCase(), '');
  return initials.length > 2 ? initials.substring(0, 2) : initials;
}
