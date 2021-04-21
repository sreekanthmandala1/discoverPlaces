export class BookingModel {
  constructor(
    public id: string,
    public placeId: string,
    public userId: string,
    public guestNumber: number,
    public placeTitle: string
  ) {
  }
}
