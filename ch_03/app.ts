// function totalLength(x: any[], y: string): number {
//     var total = x.length + y.length;
//     return total;
// }

// with Union Types

// function totalLength(x: any[] | string, y: string | any[]): number {
//     var total = x.length + y.length;
//     if(x instanceof Array) x.push(1);
//     if(y instanceof String) y.charAt(0);
//     return total;
// }

// Function Overloading

function totalLength(x: string, y: string): number
function totalLength(x: any[], y: any[]): number
function totalLength(x: any[] | string, y: string | any[]): number {
    var total = x.length + y.length;
    if(x instanceof Array) x.push(1);
    if(y instanceof String) y.charAt(0);
    return total;
}

totalLength('1', '2');
totalLength(['1'], ['2']);
