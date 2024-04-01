export class GetRandomValueError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "GetRandomValueError";
  }
}
