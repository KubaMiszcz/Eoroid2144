export interface IGameSettings {
  boardSizeX: number;
  boardSizeY: number;
  difficultyLevel: number;

  minBoardSizeX: number;
  maxBoardSizeX: number;
  maxBoardSizeXForMobile: number;

  minBoardSizeY: number;
  maxBoardSizeY: number;
  maxBoardSizeYForMobile: number;

  maxdifficultyLevel: number;
  difficultyLevelStep: number;
}
