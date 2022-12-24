interface IItem {
  id: number,
  time: number,
}

interface IEndings {
  forOne: string,
  forTwo: string,
  forFive: string,
}

interface IResult {
  correctCount: number,
  falseCount: number,
}

export type { IItem, IEndings, IResult };
