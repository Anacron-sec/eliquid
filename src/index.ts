interface EliquidComposition {
    vgMl: number;
    pgMl: number;
    aromaMl: number;
    nicotineMl: number;
}

export function calculateEliquidComposition(
    finalQuantityMl: number,
    finalNicotineMgMl: number,
    vgPgRatio: string,
    nicotineBasesMgMl: number,
    aromaPercentage: number
): EliquidComposition {
    const [vgPercentage, pgPercentage] = vgPgRatio.split('/').map(Number);

    const vgMl = finalQuantityMl * (vgPercentage / 100);
    const pgMl = finalQuantityMl * (pgPercentage / 100);

    const aromaMl = finalQuantityMl * (aromaPercentage / 100);
    const nicotineMl = (finalNicotineMgMl * finalQuantityMl) / nicotineBasesMgMl;

    return {
        vgMl: vgMl - nicotineMl * (vgPercentage / 100),
        pgMl: pgMl - aromaMl - nicotineMl * (pgPercentage / 100),
        aromaMl,
        nicotineMl,
    };
}
