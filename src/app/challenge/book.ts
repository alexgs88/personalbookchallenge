export class Book {
  constructor(
    public id: number,
    public name: string,
    public points: number,
    public genre_id: number,
    public authors: string[]
  ) {}
}
