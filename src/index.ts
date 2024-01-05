import { InvalidPercentageError, InvalidVgPgStringError } from './errors';
import type { EliquidComposition, EliquidParameters, VgPg } from './types';

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
        throw new InvalidPercentageError('vgPercentage and pgPercentage must sum up to 100.');
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

export function parseVgPgString(vgPgString: string): VgPg {
    const [vg, pg] = vgPgString.split('/').map((v) => parseInt(v, 10));

    return {vg, pg};
}

export function convertVgPgToString(vgPg: VgPg): string {
    return `${vgPg.vg}/${vgPg.pg}`;
}
