import { enumType, object, string, withDefault } from 'valibot';

export const ogImageSchema = object({
  heading: string(),
  type: string(),
  mode: withDefault(enumType(['light', 'dark']), 'light'),
});
