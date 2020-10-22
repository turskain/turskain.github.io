import { Generation, TypeName, StatName } from './data/interface';
export declare const SEED_BOOSTED_STAT: {
    [item: string]: StatName;
};
export declare function getItemBoostType(item: string | undefined): "Normal" | "Fighting" | "Flying" | "Poison" | "Ground" | "Rock" | "Bug" | "Ghost" | "Steel" | "Fire" | "Water" | "Grass" | "Electric" | "Psychic" | "Ice" | "Dragon" | "Dark" | "Fairy" | undefined;
export declare function getBerryResistType(berry: string | undefined): "Normal" | "Fighting" | "Flying" | "Poison" | "Ground" | "Rock" | "Bug" | "Ghost" | "Steel" | "Fire" | "Water" | "Grass" | "Electric" | "Psychic" | "Ice" | "Dragon" | "Dark" | "Fairy" | undefined;
export declare function getFlingPower(item?: string): 0 | 10 | 80 | 30 | 100 | 40 | 60 | 50 | 85 | 20 | 130 | 110 | 95 | 90 | 70;
export declare function getNaturalGift(gen: Generation, item: string): {
    t: TypeName;
    p: number;
};
export declare function getTechnoBlast(item: string): "Fire" | "Water" | "Electric" | "Ice" | undefined;
export declare function getMultiAttack(item: string): "Normal" | "Fighting" | "Flying" | "Poison" | "Ground" | "Rock" | "Bug" | "Ghost" | "Steel" | "Fire" | "Water" | "Grass" | "Electric" | "Psychic" | "Ice" | "Dragon" | "Dark" | "Fairy" | "???" | undefined;
