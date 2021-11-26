// const clone = value => JSON.parse(JSON.stringify(value));
function clone<T>(value: T): T {
    return JSON.parse(JSON.stringify(value));
}

clone(1);
clone({a: 1, b: '2', c: {d: 3}})

interface IHaveLength {
    length: number
}

function totalLengthX<T extends IHaveLength>(x: T, y: T): number {
    return x.length + y.length;
}

totalLengthX([], []);
