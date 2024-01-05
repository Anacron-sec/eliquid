
import { calculateEliquidComposition, convertVgPgToString, parseVgPgString } from '../src/index';
import { InvalidPercentageError, InvalidVgPgStringError } from '../src/errors';

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
            aromaPercentage
        });

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
            aromaPercentage
        });

        const sum = result.vgMl + result.pgMl + result.aromaMl + result.nicotineMl;

        expect(sum).toEqual(finalQuantityMl);
    });

    it('should throw an error if vgPercentage and pgPercentage do not sum up to 100', () => {
        const invalidVgPercentage = 60;
        const invalidPgPercentage = 50;

        expect(() => calculateEliquidComposition({
            finalQuantityMl,
            finalNicotineMgMl,
            vgPercentage: invalidVgPercentage,
            pgPercentage: invalidPgPercentage,
            nicotineBasesMgMl,
            aromaPercentage
        })).toThrow(InvalidPercentageError);
    });
});

describe('parseVgPgString', () => {
    it('should correctly parse valid vgPgString', () => {
        const vgPgString = '50/50';
        const result = parseVgPgString(vgPgString);
        expect(result).toEqual({ vg: 50, pg: 50 });
    });

    it('should throw an error for invalid vgPgString', () => {
        const invalidVgPgString = '60-40';
        
        expect(() => parseVgPgString(invalidVgPgString)).toThrow(InvalidVgPgStringError);
    });
});

describe('convertVgPgToString', () => {
    it('should correctly convert vgPg to string', () => {
        const vgPg = { vg: 50, pg: 50 };
        const result = convertVgPgToString(vgPg);
        expect(result).toEqual('50/50');
    });
});