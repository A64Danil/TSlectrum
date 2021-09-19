type Defaults = {
    symbol: string,
    separator: string,
    decimal: string,
    formatWithSymbol: boolean,
    errorOnInvalid: boolean,
    precision: number,
    pattern: string,
    negativePattern: string
};

interface AdditionalSettings {
    decimal: string,
    errorOnInvalid: boolean,
    precision: number
}


export function round(v:number): number;
export function pow(v:number): number;
export function rounding(value:number, increment:number): number;

export const groupRegex: RegExp
export const vedicRe5gex: RegExp

export function parse(value:number, opts: AdditionalSettings, useRounding:boolean)

export default class Currency {
    readonly value: number | string | Currency;
    readonly opts: AdditionalSettings;

    constructor(value: number | string | Currency, opts?: AdditionalSettings )

    add(number: number): Currency;

    subtract(number: number): Currency;

    multiply(number: number): Currency;

    divide(number: number): Currency;

    distribute(number: number): Currency[];

    dollars(): number;

    cents(): number;

    format(useSymbol: boolean): string;

    toString(): string;

    toJSON(): string;


}