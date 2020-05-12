/**
 * All alphabetical characters, lowercase
 */
const charsLower = 'abcdefghijklmnopqrstuvwxyz';

/**
 * String with all possible characters to use in random string generation
 */
const seed = `${charsLower + charsLower.toUpperCase()}0123456789`;

/**
 * return a random char with characters available in seed.
 */
export const randomChar = (seedString = seed) => seedString[Math.floor(Math.random() * seedString.length)];

/**
 * Returns a random string with the given length
 * @param length length of the string filled with random chars
 */
export const randomString = length => Array.from({length}, randomChar).join('');
