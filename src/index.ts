import type { EliquidComposition } from './types/index';
import type { EliquidParameters } from './types/index';

export function calculateEliquidComposition(params: EliquidParameters): EliquidComposition {
    const {
        finalQuantityMl,
        finalNicotineMgMl,
        vgPercentage,
        pgPercentage,
        nicotineBasesMgMl,
        aromaPercentage
    } = params;

    if (vgPercentage + pgPercentage !== 100) {
        throw new Error('vgPercentage and pgPercentage must sum up to 100.');
    }

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
