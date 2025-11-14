export interface Character {
  id: number;
  name: string;
  description: string;
  attack: number;
  defense: number;
  health: number;
  characterType: CharacterType;
}
export type CharacterType = "Player" | "Enemy" | "Ally";
export interface Story {
  nodes: StoryNode[];
  dialogs: Dialog[];
  context: string;
}

export interface StoryNode {
  id: string;
  parent?: string[] | null | undefined;
  children?: string[] | null | undefined;
  content: string;
  choices: string[];
}

export interface Dialog {
  id: string;
  characterId: string;
  content: string;
}
