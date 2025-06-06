//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록

function solution(numbers) {
    let sum=0;
    let avg=0;
    for(let i =0; i<numbers.length;i++){
        sum+=numbers[i]
    }
    avg = sum/numbers.length
    return avg;
}