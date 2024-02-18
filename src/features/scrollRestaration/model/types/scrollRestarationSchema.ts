// Первой принимает <адрес страницы, позицией скрола>
export type ScrollSchema = Record<string, number>;

export interface ScrollRestrationSchema {
  scroll: ScrollSchema;
}
