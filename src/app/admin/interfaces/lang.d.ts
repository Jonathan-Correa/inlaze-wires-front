export interface Lang {
  _id?: string;
  name: string;
  translations: Record<string, unknown>;
}
