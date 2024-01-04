import { calculateEliquidComposition } from '../src/index';

describe('calculateEliquidComposition', () => {
    it('should correctly calculate eliquid composition', () => {
        const finalQuantityMl = 100;
        const finalNicotineMgMl = 4;
        const vgPgRatio = '50/50';
        const nicotineBasesMgMl = 20;
        const aromaPercentage = 10;

        const result = calculateEliquidComposition(
            finalQuantityMl,
            finalNicotineMgMl,
            vgPgRatio,
            nicotineBasesMgMl,
            aromaPercentage
        );

        expect(result).toEqual({
            vgMl: 40,
            pgMl: 30,
            aromaMl: 10,
            nicotineMl: 20,
        });
    });

    it('should ensure the sum of vgMl, pgMl, aromaMl, and nicotineMl equals finalQuantityMl', () => {
        const finalQuantityMl = 100;
        const finalNicotineMgMl = 4;
        const vgPgRatio = '50/50';
        const nicotineBasesMgMl = 20;
        const aromaPercentage = 10;
    
        const result = calculateEliquidComposition(
            finalQuantityMl,
            finalNicotineMgMl,
            vgPgRatio,
            nicotineBasesMgMl,
            aromaPercentage
        );
    
        const sum = result.vgMl + result.pgMl + result.aromaMl + result.nicotineMl;
    
        expect(sum).toEqual(finalQuantityMl);
    });
});

