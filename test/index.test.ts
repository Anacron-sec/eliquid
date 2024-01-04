import { calculateEliquidComposition } from '../src/index';

describe('calculateEliquidComposition', () => {
    const finalQuantityMl = 100;
    const finalNicotineMgMl = 4;
    const vgPercentage = 50;
    const pgPercentage = 50;
    const nicotineBasesMgMl = 20;
    const aromaPercentage = 10;

    it('should correctly calculate eliquid composition', () => {
        const result = calculateEliquidComposition({
            finalQuantityMl,
            finalNicotineMgMl,
            vgPercentage,
            pgPercentage,
            nicotineBasesMgMl,
            aromaPercentage}
        );

        expect(result).toEqual({
            vgMl: 40,
            pgMl: 30,
            aromaMl: 10,
            nicotineMl: 20,
        });
    });

    it('should ensure the sum of vgMl, pgMl, aromaMl, and nicotineMl equals finalQuantityMl', () => {
        const result = calculateEliquidComposition({
            finalQuantityMl,
            finalNicotineMgMl,
            vgPercentage,
            pgPercentage,
            nicotineBasesMgMl,
            aromaPercentage}
        );

        const sum = result.vgMl + result.pgMl + result.aromaMl + result.nicotineMl;

        expect(sum).toEqual(finalQuantityMl);
    });

    it('should throw an error if vgPercentage and pgPercentage do not sum up to 100', () => {
        const finalQuantityMl = 100;
        const finalNicotineMgMl = 4;
        const vgPercentage = 60;
        const pgPercentage = 50;
        const nicotineBasesMgMl = 20;
        const aromaPercentage = 10;

        expect(() => calculateEliquidComposition({
            finalQuantityMl,
            finalNicotineMgMl,
            vgPercentage,
            pgPercentage,
            nicotineBasesMgMl,
            aromaPercentage}
        )).toThrow();
    });
});
