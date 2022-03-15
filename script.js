let theFirstSide;
let theSecondSide;
let theThirdSide;

let result = document.getElementById("result");






// кнопка для запуска определния типа треугольника
let btn = document.getElementById("btn");

btn.onclick = function () {
    console.clear ();
    AcceptValues();
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key === "Enter") {
        console.clear ();
        AcceptValues();
    }
});



//функция принятия значений
function AcceptValues() {

    theFirstSide = Number(document.getElementById("one").value);
    theSecondSide = Number(document.getElementById("two").value);
    theThirdSide = Number(document.getElementById("three").value);

    result.innerHTML = TypeOfTriangle();

}


//функция определения типа треугольника
function TypeOfTriangle() {

    console.log('***');

    console.log('Первая сторона = ', theFirstSide);
    console.log('Вторая сторона = ', theSecondSide);
    console.log('Третья сторона = ', theThirdSide);

    if ((isNaN(theFirstSide) == false) && (isNaN(theSecondSide) == false) && (isNaN(theThirdSide) == false)) {

        if ((theFirstSide != 0) && (theSecondSide != 0) && (theThirdSide != 0)) {

            if ((theFirstSide > 0) && (theSecondSide > 0) && (theThirdSide > 0)) {

                if ((theFirstSide + theSecondSide > theThirdSide) && (theFirstSide + theThirdSide > theSecondSide) && (theThirdSide + theSecondSide > theFirstSide)) {

                    if ((theFirstSide == theSecondSide) && (theSecondSide == theThirdSide) && (theThirdSide == theFirstSide)) {
                        return ('Треугольник равносторонний');
                    } else if ((theFirstSide != theSecondSide) && (theSecondSide != theThirdSide) && (theThirdSide != theFirstSide)) {
                        return ('Треугольник разносторонний');
                    } else if ((theFirstSide == theSecondSide) || (theSecondSide == theThirdSide) || (theThirdSide == theFirstSide)) {
                        return ('Треугольник равнобедренный');
                    }

                } else {
                    return ('Треугольник не существует')
                }

            } else {
                return ('Невозможно определить тип треугольника. Введено отрицательное число.');
            }

        } else {
            return ('Невозможно определить тип треугольника. Введен 0.');
        }

    } else {
        return ('Невозможно определить тип треугольника. Введено значение, отличное от цифры.');
    }

}