
//1
// Напишите функцию, которая получает в качестве аргументов объект и строку и
// проверяет, есть ли в этом объекте свойство с именем, равным этой строке.

let first = {
    name: 'Vasja',
    hobby: 'reading newspapers',
    city: 'Baranovichi'
};
function ifPropInObj(obj, propName) {
    for(let prop in obj) {
        if (prop === propName) {
            return true;
        }
    }
    return false;
}
// console.log(ifPropInObj(first, "surname"));

//2
// Создайте объект для хранения своего любимого кулинарного рецепта. Он должен
// содержать название, ингредиенты и их необходимое количество (в виде
// вложенного объекта), а также количество порций (больше 1). Напишите
// функцию, которая получает "рецепт", подсчитывает, сколько каждого
// ингредиента нужно на одну порцию, и выводит информацию об этом в консоль.

const recipe = {
    name: "Шарлотка с яблоками",
    ingredients: {
        sugar: "1 glass",
        eggs: 3,
        flour: "1 glass",
        apples: 3
    },
    portions: 6
};

function getCake(obj) {
    for(let prop in obj.ingredients) {
        console.log(prop + " for one portion" + " " + Math.ceil((parseInt(obj.ingredients[prop]) / obj.portions) * 100) / 100)
    }

}
// getCake(recipe);

//3
// Создайте объект "Цилиндр" (свойства – радиус и высота). Добавьте в него
// метод, который считает объём цилиндра (используя this).

let cylinder = {
    radius: 25,
    height: 45,
    volume: function() {
        return Math.round(Math.PI * (this.radius ** 2) * this.height) + " cm3";
    }
};

// console.log(cylinder.volume());

//4
// Выберите пингвина из списка вымышленных пингвинов на Википедии и опишите
// его в виде объекта (не менее трёх полей; например, имя, создатель и источник).
// Добавьте этому объекту свойство canFly. Добавьте два метода: sayHello,
// который выводит в консоль приветствие и представление вашего пингвина,
// и fly, который в зависимости от значения свойства canFly (true или false)
// определяет, может ли пингвин летать, и сообщает об этом.

let penguin = {
    name: "Sparky the Wonder Penguin",
    creator: "Tom Tomorrow",
    features: {
        speech: "fast-talking",
        cloth: "red visor"
    },
    canFly: "false",
    sayHello: function () {
        console.log(`The penguin name is ${this.name}.`)
    },
    fly: function () {
        if(this.canFly == "true") {
            console.log(`This penguin can fly`);
        } else {
            console.log(`This penguin can't fly`);
        }
    }
};

// penguin.sayHello();
// penguin.fly();



















