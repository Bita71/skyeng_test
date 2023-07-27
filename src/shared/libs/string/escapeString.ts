/**
 * Возвращает экранированную строку
 * @param value - строка для экранирования
 */
export const escapeString = (value?: string) => JSON.stringify(value);
