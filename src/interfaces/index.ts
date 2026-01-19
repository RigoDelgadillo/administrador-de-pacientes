export interface Parient {
  id: string;
  name: string;
  caretaker: string;
  email: string;
  date: Date;
  symptoms: string;
}

export type DraftParient = Omit<Parient, "id">;
