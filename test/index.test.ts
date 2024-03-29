
import { calculateEliquidComposition, convertVgPgToString, parseVgPgString } from '../src/index';
import { InvalidPercentageError, InvalidPgVgStringError } from '../src/errors';

describe('calculateEliquidComposition', () => {
    const finalQuantityMl = 100;
    const finalNicotineMgMl = 4;
    const vgPercentage = 50;
    const pgPercentage = 50;
    const nicotineBasesMgMl = 20;
    const flavorPercentage = 10;

    it('should correctly calculate eliquid composition', () => {
        const result = calculateEliquidComposition({
            finalQuantityMl,
            finalNicotineMgMl,
            vgPercentage,
            pgPercentage,
            nicotineBasesMgMl,
            flavorPercentage
        });

        expect(result).toEqual({
            vgMl: 40,
            pgMl: 30,
            flavorMl: 10,
            nicotineMl: 20,
        });
    });

    it('should ensure the sum of vgMl, pgMl, flavorMl, and nicotineMl equals finalQuantityMl', () => {
        const result = calculateEliquidComposition({
            finalQuantityMl,
            finalNicotineMgMl,
            vgPercentage,
            pgPercentage,
            nicotineBasesMgMl,
            flavorPercentage
        });

        const sum = result.vgMl + result.pgMl + result.flavorMl + result.nicotineMl;

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
            flavorPercentage
        })).toThrow(InvalidPercentageError);
    });
});

describe('parseVgPgString', () => {
    it('should correctly parse valid vgPgString', () => {
        const vgPgString = '50/50';
        const result = parseVgPgString(vgPgString);
        expect(result).toEqual({ vg: 50, pg: 50 });
    });
});

describe('convertVgPgToString', () => {
    it('should correctly convert vgPg to string', () => {
        const vgPg = { vg: 50, pg: 50 };
        const result = convertVgPgToString(vgPg);
        expect(result).toEqual('50/50');
    });

    it('should throw an error for invalid vgPgString format', () => {
        const invalidVgPgString = '50-50';
        expect(() => parseVgPgString(invalidVgPgString)).toThrow(InvalidPgVgStringError);
    });
});