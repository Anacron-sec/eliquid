export interface EliquidComposition {
    vgMl: number;
    pgMl: number;
    flavorMl: number;
    nicotineMl: number;
}

export interface EliquidParameters {
    finalQuantityMl: number;
    finalNicotineMgMl: number;
    vgPercentage: number;
    pgPercentage: number;
    nicotineBasesMgMl: number;
    flavorPercentage: number;
}

export interface VgPg {
    vg: number;
    pg: number;
}