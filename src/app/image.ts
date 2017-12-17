export class Image {
  name: string;
  description: string;
  quizzes?: string;
  technologies?: string;
  photos?: Photos[];

  rows: number;
  cols: number;
}

export class Photos {
  name: string;
  content: string;
}
