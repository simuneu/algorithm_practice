//정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return

function solution(n) {
    let numArr=[]
    numArr = String(n).split("")
    numArr = numArr.map((a)=>Number(a));
    
    let answer= numArr.reduce((acc, cur)=>acc+cur,0)
    return answer;
}

//reduce 배열을 돌면서 하나로 합치는 기능, 
//acc 예전 값과 cur최근값을 더함 0은 초기값부터 시작