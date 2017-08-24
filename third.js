/*
* смоделируем процесс переливания.
* в выходном массиве объектов каждый объект описывает
* соответствующую синюю бутылку.
* ключ в этом объекте - это номер красной бутылки,
* а значение - объем воды, перелитый из этой красной бутылки
*
* */

function solution(redBottles, blueBottles){

    var redValue = redBottles.reduce((a, b) => a + b, 0);
    var blueValue = blueBottles.reduce((a, b) => a + b, 0);
    if(blueValue > redValue){
        throw new Error("Unable to fill blue bottles. Red bottles total values is less then blue's ")
    }

    var answer = [];
    var info = {};
    var redCounter = 1;
    while (redBottles.length && blueBottles.length){
        if(redBottles[0] > blueBottles[0]){
            var volume =  blueBottles[0];
            redBottles[0] -= volume;
            info[redCounter] = volume;

            blueBottles.shift();
            answer.push(info);
            info = {};
        }
        else if(redBottles[0] < blueBottles[0]){
            var volume =  redBottles[0];
            blueBottles[0] -= volume;
            info[redCounter] = volume;
            redBottles.shift();
            redCounter ++;
        }
        else if(redBottles[0] == blueBottles[0]){
            var volume = blueBottles[0];
            info[redCounter] = volume;
            redBottles.shift();
            redCounter ++;
            blueBottles.shift();
            answer.push(info);
            info = {};

        }
    }
    return answer;
}
module.exports = solution;
