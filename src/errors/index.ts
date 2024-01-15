export class InvalidPercentageError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidPercentageError';
    }
}

export class InvalidPgVgStringError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidPgVgStringError';
    }
}