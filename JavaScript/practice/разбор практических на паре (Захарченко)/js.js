
/*
let x = 10;

function func() {
    x = x + 100;
}
func();

alert(x);

*/

/*


//циклы



//while
/!*
//вывести # столько раз сколько указал пользователь

let  x = parseInt(prompt("введите число","1"));
while (x>0){
    document.write("#<br>");
    x--;
}

let x = parseInt(prompt("enter the number","1"));
while (x>0) {
    document.write("# <br>");
    x--;
}


*!/
/!*
//пользователь ввел число, а на экране вывелись все числа от введенного до 0
let  x = parseInt(prompt("введите число","1"));
while (x>=0){
    document.write(x + "<br>");
    x--;
}*!/

/!*
//запросить число и степень. возвести число в указанную степень и вывести результат
let  x = parseInt(prompt("введите число","1"));
let  y = parseInt(prompt("введите степень","1"));
let z = y;

let result = 1;
while (y>0) {
    result = result * x;
    y--;
}
document.write("число " +x+ " в степени " +z+ " = " + result);
*!/

/!*
//запросить 2 числа и запросить общие делители
    let  x = parseInt(prompt("введите число","1"));
    let  y = parseInt(prompt("введите число","1"));
    let min = (x>y)? y: x;
    while (min>1) {
        if ((x % min) == 0 && (y % min) == 0){
            document.write("делитель: " + min + "<br>");
    }
            min--;
    }
*!/

/!*
//посчитать факториал введенного пользователем числа
let  x = parseInt(prompt("введите число","5"));
let number = x;
let result = 1;
while (x>0) {
    result = result*x;
    x--;
}
document.write("факториал числа " + number + " равен " + result);
*!/

//Do while

/!*
// предлагать пользователю решить пример 2+2*2 до тех пор пока он не решит его правильно
do {
    var x = prompt("решите пример: 2 + 2 * 2 = "); // не работает с let
}while (x != 6);
alert("Браво!!!!");
*!/

/!*
//делить число 1000 на 2 пока не получится число меньше 50. вывести это число и сколько делений произвели
let x = 1000;
let y = 2;
let count = 0;

do {
  x = x / 2;
  count++;
} while (x>=50);
document.write("число: " + x + ", делений: " + count);
*!/


//for

/!*

//вывести все числа от 1 до 100, которые кратны указанному пользователем числу.
/!*
//обычное решение
let x = prompt("введите число","10");

for (let i = 1; i <= 100; i++) {
    if( (i % x) == 0 ) {
        document.write(i + "<br>");
    }
}
*!/

/!* //&& i !=x  если не хочу видеть число введенное пользователем
let x = prompt("введите число","10");

for (let i = 1; i <= 100; i++) {
    if( (i % x) == 0 && i !=x ) {
        document.write(i + "<br>");
    }
}
*!/

/!*
// с continue
let x = prompt("введите число","10");
for (let i = 1; i <= 100; i++) {
    if( (i % x) == 0 || i ==x ) {
        continue;
    }
    document.write(i + "<br>");
}

*!/

*!/
/!*

//вывести каждый 4-й элемент из указанного пользователем диапазона. Пользователь указывает min и max значение диапазона.

let  x = parseInt(prompt("введите число 1","10"));
let  y = parseInt(prompt("введите число 2","20"));
let counter = 1;

for (let i = x; i <= y; i++) {
    if ( (counter % 4) == 0 ) {
        document.write(i + "<br>");
    }
    counter++;
}
*!/


/!*
//запросить число и проверить, простое ли она. простое делиться без остатка только на себя и на 1
let  x = parseInt(prompt("введите число","10"));
let result = true;  // флаг

for (let i = x - 1; i >1; i--){
    if ((x % i) == 0) {
        result = false;
    }
}
alert((result)? "число простое": "число не простое");
*!/
/!*
// с break
let  x = parseInt(prompt("введите число","10"));
let result = true;  // флаг

for (let i = x - 1; i >1; i--){
    if ((x % i) == 0) {
        result = false;
        break;
    }
}
alert((result)? "число простое": "число не простое");
*!/







let month = prompt("введите номер месяца","1");
switch (month) {
    case "1" :
        alert("январь");
        break;
    case "2" :
        alert("февраль");
            break;
    case "3" :
        alert("март");
         break;
    case "4" :
        alert("апрель");
           break;
    case "5" :
        alert("май");
            break;
    case "6" :
        alert("июнь");
           break;
    case "7" :
        alert("июль");
         break;
    case "8" :
        alert("август");
           break;
    case "9" :
        alert("сентябрь");
              break;
    case "10" :
        alert("октябрь");
            break;
    case "11" :
        alert("ноябрь");
           break;
    case "12" :
        alert("декабрь");
         break;
    default:
        alert("неверно введен месяц");
}


/!*
let x1 = prompt("введите число 1");
x1 = parseInt(x1);
let x2 = prompt("введите число 2");
x2 = parseInt(x2);
let operator = prompt("введите оператор(+, -,*,/)","+");
switch (operator) {
    case "+" :
        alert("результат" + (x1 + x2));
        break;
    case "-" :
        alert("результат" + (x1 - x2));
        break;
    case "*" :
        alert("результат" + (x1 * x2));
        break;
    case "/" :
    if (x2 == 0){
        alert("делить на ноль нельзя");
    }else{
        alert("результат" + (x1 / x2));
    }
        break;
    default:
        alert("неизвестный оператор");
}
*!/
*/

/*
//Функции

/!*
function show5Blocks() {
    for (let i=1; i<=5; i++){
        document.write("<h2> Header "+ i +" </h2>");
    }
}
//show5Blocks();  //вызов функции

function incAndLog(x) {
    x = x + 1;
    alert("inc x = " + x );
    Log.innerHTML += "<br>inc x = " + x;
}
incAndLog(x);

function incAndLog(x) {
    x = x + 1;
    alert("inc x = " + x );
    Log.innerHTML += "<br>inc x = " + x;
}

let x = 2;
Log.innerHTML += "<br>inc x = " + x;
incAndLog(x);
Log.innerHTML += "<br>inc x = " + x;

//пример ф.куба
function cube(x) {
    return x*x*x;
}
let result = cube(10);
alert(result);
*!/

//задачи

/!*
//1.написать функцию, которая принимает 2 числа и возвращает меньшее из них.
function min(a,b) {
    if(a>b) {
        return b;
    }else {
        return a;
    }
}
alert(min(90,4));
//return (a>b)? b:a; с помощью тернарного оператора
*!/

/!*
//2.написать функцию, которая возводит переданное число в указанную степень
//x - число / y степень/ while (y >= 1), можно (y>0)
function power(x,y) {
    let result = 1;
    while (y >= 1){
        result = result * x;
        y--;
    }
    return result;
}

alert(power(2,3));
*!/

/!*
//3. написать ф, которая принимает 2 числа и знак (+,-,*,/), считает пример и возвращает результат
function calc(a, b, operator) {
    switch (operator) {
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            return a/b;
    }
}
alert(calc(10,15,"+"));

alert(calc(10,15,"-"));

alert(calc(10,15,"*"));

alert(calc(10,15,"/"));
*!/

/!*
//4.Написать функцию, которая проверяет , является ли переданное ей число простым
function isSimple(x) {
  for (let i = x - 1; i > 1; i--){
      if ((x % i) == 0){
          return "Число не простое";
      }
  }

  return "число простое";
}
alert(isSimple(7));
alert(isSimple(26));
*!/

/!*
//5. Написать функцию, которая принимает число и выводит таблицу * для этого числа. Вызовитие функцию для всех числе от 2 до 9.


function table(x) {
    for (let i = 1; i<=10; i++){
        document.write(x + " * " + i + " = " + x * i + "<br>");
    }
    document.write("<hr>");
}
//table(6);

for (let i = 2; i<=9; i++){
    table(i);
}
*!/



/!*
//6.написать функцию которая принимает от 1 до 5 числе и возвращает их сумму
function summ() {
    let result=0;
    for (let i = 0; i<arguments.length; i++){
        result += arguments[i];
    }

    return result;
}
alert(summ(10,7));



*!/

/!*
//8.Написать функцию, которая принимает от 1 до 5 числе и возвращает большее из них.
function max() {
    let max = arguments [0];
    for (let i = 0; i<arguments.length; i++){
        if (arguments[i] > max && i < 4){
            max = arguments[i];
        }
    }

    return max;
}
alert(max(70,50,40,110,2));

*!/

/!*
// 9.написать функцию, которая выводит все четные или нечетные числа, в указанном пользователем диапазоне. какие числа выводить,
    //определяется третьим параметром типа bool (true - четные, false - нечетные).

function showNumbers(a,b,even) {
    for (let i = a; i <= b; i++) {
        if (even){
            if ((i % 2) == 0){
                document.write(i + "<br>");
            }
        }else {
            if ((i % 2) != 0){
                document.write(i + "<br>");
            }
        }

    }
}
showNumbers(5,50,true);
document.write("<hr>");
showNumbers(40,79,false);
*!/

/!*
// написать функцию, которая принимает дату ( день, месяц, год) и возвращает дату следующего дня в виде строки <<дд.мм.гггг>>.
// Проверку на високосный год желаетельно написать отдельной функции.

/*
function getNextDate(day,month,year) {
    let maxDay = 30;
    if(month == 2) {
        maxDay = isLeapYear(year)? 29:28;
    }else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        maxDay ==31;
    }

    if (day == maxDay){
        day == 1;
        if (month == 12){
            month==1;
            year++;
        }else {
            month++
        }
    }else {
        day++;
    }

    if (day<10){
        day = "0" + day;
    }
    if (month<10) {
        month = "0" + month;
    }
    return day + " . " + month + " . " + year;
}

function isLeapYear(year) {
    return((year%400) == 0 || ((year % 4) == 0 && (year%100) !=0));
}



alert(getNextDate(23,9,2020));
alert(getNextDate(28,2,2020));
alert(getNextDate(29,2,2020));

*!/

*/


/*
// Рекурсия

/!*
// факториал
function factorial (x) {
    //console.log("Вызвана функция factorial с параметром" + x);
    if (x==1) {
        return x;
    }
    return factorial(x-1) * x;
}
alert(factorial(5));
*!/

/!*
let x = parseInt(prompt("введите первое число","10"));
let y = parseInt(prompt("введите второе число","20"));

/!*function showNumbers(x,y) {
    if(x <= y){
        document.write(x + "<br>");
        showNumbers(x+1,y);
    }
}
showNumbers(x,y);*!/

/!*
function showNumbers2(x,y) {
    if(y >= x){
        document.write(y + "<br>");
        showNumbers2(x,y-1);
    }
}
showNumbers2(x,y);
*!/
*!/

/!*
//рекурсия
function reverse(x) {
    let rest = x%10;
    document.write(rest);

    let newNumber = (x-rest) / 10;
    if ( newNumber > 9){
        reverse(newNumber);
    } else{
        document.write(newNumber);
    }
}
reverse(12345);

*!/

/!*
//считает сумму числа
function summ(x) {
    let rest = x % 10;

    let newNumber = (x- rest) / 10;

    if (newNumber >9){
        document.write(rest + " + ");
        return rest + summ(newNumber);
    }else {
        document.write(rest + " + " + newNumber);
        return rest + newNumber;
    }
}
alert(summ(135791));
*!/

/!*
//скобки
function showHooks(x) {
    if (x==1){
        return "()";
    }else{
        return "(" + showHooks(x-1) + ")";
    }
}
document.write(showHooks(10));
*!/
*/

/*
let x = 10;

function func() {
    x = x + 100;
}
func();

alert(x);

*/

//Объекты, массивы, строки

//объекты

//1.функция принимает объект-прямоугольник и выводит инфу о нем( где какая точка расположена)

/*
let rectangle = {
    point1: {
        x:2,
        y:5
    },
    point2: {
        x:7,
        y:3
    }
};

function rectangleInfo(obj) {
    document.write("Точка 1, координата x = " + obj.point1.x + "<br>");
    document.write("Точка 1, координата y = " + obj.point1.y+ "<br>");
    document.write("Точка 2, координата x = " + obj.point2.x+ "<br>");
    document.write("Точка 2, координата y = " + obj.point2.y+ "<br>");
}

//rectangleInfo(rectangle);
function getWidth(obj) {
    return obj.point2.x - obj.point1.x;
}
//ширина alert(getWidth(rectangle));

//
function isPoint() {

}

*/

//массивы

/*//ЗАДАНИЕ 1.
// создать массив из 10 случайных чисел и написать несколько функций для работы с ним.

let arr =[];

    for (let i = 0; i<10; i++){
        arr.push(parseInt(Math.random()*100));
}*/

/*    //1.функция принимает массив и выводит его на экран
function showArray(array) {
    for (let item of array){                //let item - просто переменная
        document.write(item+"<br>");
    }
}*/
    //showArray(arr);

/*// 2.функция принимает массив и выводит только четные элементы

function showEvenArrayElements(array) {
    for (let element of array){
        if (element%2 == 0){
            document.write(element+"<br>");
        }
    }
}*/
//showEvenArrayElements(arr);

/*// 3.функция принимает массив и возвращает сумму всех элементов массива

function sumArray(array) {
        let sum = 0;
    for (let item of array){
        sum+=item;
    }

    return sum;
}*/
    //showArray(arr);// показывает сам массив
//alert("сумма элементов массива равна " + sumArray(arr)); // сумма элементов массива

/*
// 4. функция принимает массив и возвращает его максимальный элемент

function maxArray(array) {
    let max = array[0];
    for (let item of array){
       if (item > max){
           max = item;
       }
    }
    return max;
}
*/

    //showArray(arr);
  //  alert("Макссимум " + maxArray(arr));

/*
//5. функция добавления нового элемента в массив по указанному индексу
    function addElement(array, element, index) {
        return array.splice(index,0,element);           // массив [10, 20,40,50] элемент 11, индекс 2 ) пример
    }
*/

   /* showArray(arr);
    addElement(arr,77,2);
    document.write("<hr>");
    showArray(arr);*/

/*    // функция удаления элмента из массива по указанному индексу

function deleteElement(array, index) {
    return array.splice(index, 1);
}*/

/*showArray(arr);
deleteElement(arr,2);
document.write("<hr>");
showArray(arr);*/


/*//ЗАДАНИЕ 2
// создать один массив из 5 случайных чисел
let arr2 = [];
for (let i = 0; i<5; i++){
    arr2.push(parseInt(Math.random()*100));
}*/

/*//1. функция принимает 2 массива и возвращает новый массив , в котором собраны все элементы из двух массивов без повторения

function getUniqueArray(array1,array2) {
    let result = [];
    for (let item of array1) {
        if(!result.includes(item)){
            result.push(item);
        }
    }  for (let item of array2) {
        if(!result.includes(item)){
            result.push(item);
        }
    }
    return result;
}*/

/*showArray(arr);
document.write("<hr>");
showArray(arr2);
document.write("<hr>");
showArray(getUniqueArray(arr,arr2));*/


/*//2. функция принимает 2 массива и возвращает новый массив , в котором собраны все общие элементы без повторений

function getCommonElements(array1,array2) {
    let result = [];
    for (let item of array2) {
        if(array1.includes(item) && !result.includes(item)){
            result.push(item);
        }
    }
    return result;
}*/
/*showArray(arr);
document.write("<hr>");
showArray(arr2);
document.write("<hr>");
showArray(getCommonElements(arr,arr2));*/

/*//3. функция принимает 2 массива и возвращает новый массив , в котором собраны все элементы из первого массива , которых нет во втором массиве

function getElements(array1,array2) {
    let result = [];
    for (let item of array1) {
        if(!array2.includes(item)){
            result.push(item);
        }
    }
    return result;
}*/

/*showArray(arr);
document.write("<hr>");
showArray(arr2);
document.write("<hr>");
showArray(getElements(arr,arr2))*/


//ЗАДАНИЕ 3
/*//Создать массив фруктов и отсортировать его по алфавиту

let fruits  = [
    "lemon",
    "banana",
    "apple"
];

fruits.sort();
//showArray(fruits);*/

/*//вывод на экран с помощью document.write в виде списка ( спомощью тегов ul  и li)

function showFruits(array) {
    document.write("<ul>");
    for (let item of array){
    document.write("<li>" + item + "</li>");
    }
    document.write("</ul>");
}

//showFruits(fruits);*/

/*//2. поиск фрукта в массиве. Функция принимает название фрукта и возвращает индекс найденного элемента или - 1, если не найден. Поиск должен быть нерегистрированным

function getIndex(array,name) {
    for (let key in array){
        if (array[key] == name){
            return key;
        }
    }
    return -1;
}
//alert(getIndex(fruits,"banana"));*/

/*

      1
const THIS_YEAR = 2020;
let yearOfBirth = prompt("Ваш год рождения");
alert(`Вам ${THIS_YEAR - yearOfBirth} лет!`);


let userVolume = prompt("Укажите объем флеш карты в Gb");
const CONSTANT_VOLUME = 1024;
let fileSize = 820;
alert((userVolume*CONSTANT_VOLUME) / fileSize);


const RUB_USD = 0.013;
const USD_RUB = 75.32;
const RUB_EUR = 0.011;
const EUR_RUB = 89.05;
const USD_EUR = 0.85;
const EUR_USD = 1.18;

let name = prompt( "Валюта","RUB, USD, EUR");
// USD
if (name == "USD") {
    let sum = prompt("Сумма");
    let what = prompt("На какую валюту ?", "RUB, EUR");
    if (what == "RUB") {
        let finalDollRub = sum*USD_RUB;
        let consentFinalDollRub = confirm (`Ваша сумма в рублях ${finalDollRub} Продолжить обмен ?`);
        if (consentFinalDollRub == true) {
            alert(`Мы поменяли ${sum + "долларов" } на ${finalDollRub + "рублей"}`);
        }
        else {
            alert("Увидимся в следующий раз");
        }
    }
    else if (what == "EUR") {
        let finalDollEuro = sum*USD_EUR;
        let consentFinalDollEuro = confirm (`Ваша сумма в евро ${finalDollEuro} Продолжить обмен ?`);
        if (consentFinalDollEuro == true) {
            alert(`Мы поменяли ${sum + "долларов" } на ${finalDollEuro + "евро"}`);
        }
        else {
            alert("Увидимся в следующий раз");
        }
    }
}
// RUB
else if (name == "RUB") {
    let sum = prompt("Сумма");
    let what = prompt("На какую валюту ?", "USD, EUR");
    if (what == "USD") {
        let finalRubDoll = sum*RUB_USD;
        let consentFinalRubDoll = confirm (`Ваша сумма в долларах ${finalRubDoll} Продолжить обмен ?`);
        if (consentFinalRubDoll == true) {
            alert(`Мы поменяли ${sum + "рублей" } на ${finalRubDoll + "долларов"}`);
        }
        else {
            alert("Увидимся в следующий раз");
        }
    }
    else if (what == "EUR") {
        let finalRubEuro = sum*RUB_EUR;
        let consentFinalRubEuro = confirm (`Ваша сумма в евро ${finalRubEuro} Продолжить обмен ?`);
        if (consentFinalRubEuro == true) {
            alert(`Мы поменяли ${sum + "рублей" } на ${finalRubEuro + "евро"}`);
        }
        else {
            alert("Увидимся в следующий раз");
        }
    }
}
// EUR
else if (name == "EUR") {
    let sum = prompt("Сумма");
    let what = prompt("На какую валюту ?", "RUB, USD");
    if (what == "USD") {
        let finalEuroDoll = sum*EUR_USD;
        let consentFinalEuroDoll = confirm (`Ваша сумма в долларах ${finalEuroDoll} Продолжить обмен ?`);
        if (consentFinalEuroDoll == true) {
            alert(`Мы поменяли ${sum + "евро" } на ${finalEuroDoll + "долларов"}`);
        }
        else {
            alert("Увидимся в следующий раз");
        }
    }
    else if (what == "RUB") {
        let finalEuroRub = sum*EUR_RUB;
        let consentFinalEuroRub = confirm (`Ваша сумма в рублях ${finalEuroRub} Продолжить обмен ?`);
        if (consentFinalEuroRub == true) {
            alert(`Мы поменяли ${sum + "евро" } на ${finalEuroRub + "рублей"}`);
        }
        else {
            alert("Увидимся в следующий раз");
        }
    }
}

*/

