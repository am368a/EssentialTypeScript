var array = [
    "Pick up drycleaning",
    "Clean Batcave",
    "Save Gotham"
];

for (var value of array) {
    console.log(value);
}


// ch 02_07

const itemList = [123, 'pickup dry cleaning', false];
const [id, title] = itemList;

var a =1, b=5;

[a, b] = [b, a];

const itemListObj = {
    title: 'xyx'
};

const {title: tt} = itemListObj;

// ch 08

const calc = (action, ...values) => {
    switch (action){
        case 'ADD':
            return values.reduce((acc, curr)=> acc+curr, 0)
    }
};
