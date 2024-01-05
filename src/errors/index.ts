export class InvalidPercentageError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidPercentageError';
    }
}

export class InvalidVgPgStringError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidVgPgStringError';
    }
}