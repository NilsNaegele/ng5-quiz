export class Image {
  name: string;
  description: string;
  quizzes?: string;
  technologies?: string;
  photos?: Photos[];
  messages?: Message[];

  rows: number;
  cols: number;
}

export class Photos {
  name: string;
  content: string;
}

export class Message {
  what: string;
  content: string;
}
