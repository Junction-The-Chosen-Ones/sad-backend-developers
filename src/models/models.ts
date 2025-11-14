export interface characters {
  id: number;
  name: string;
  description: string;
  attack: number;
  defense: number;
  health: number;
}
export interface story {
  nodes: {
    id: string;
    parent?: string[] | null | undefined;
    children?: string[] | null | undefined;
    content: string;
  };
  dialogs: {
    id: string;
    characterId: string;
    content: string;
  };
  context: string;
}
