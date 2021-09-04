

export const emitter: {};

// export function Emitter(): Object;


export function Event(type): void;


export class Emitter {
    on(type: string, handler: object): Emitter;
    off(type: string, handler: object): Emitter;

    trigger(event: Event, args: []): Emitter;

    _dispatch(event: Event, args: []): Emitter;

    _offByHandler(type: string, handler: object): Emitter;

    _offByType(type: string): Emitter;

    _offAll(): Emitter;

    mixin(): Emitter;
}