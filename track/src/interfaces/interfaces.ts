export interface GameData {
  gameId: number;
  teamScore: number;
  status: "finished" | "live";
  score: Record<string, number>; // ключ — название команды, значение — очки
  teams: {
    nameId: string;
    place: number;
    matchPoints: number;
    players: {
      id: string;
      name: string;
      kills: number;
    }[];
  }[];
}
