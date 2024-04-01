export class GetSizeRelationshipError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "GetSizeRelationshipError";
  }
}
