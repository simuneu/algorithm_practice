//정수 배열 numbers가 매개변수로 주어집니다. 
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return

function solution(numbers) {
    numbers.sort((a,b)=>b-a)
    return numbers[0]*numbers[1];
}

//sort 정렬 함수
//(a,b)=>b-a) 내림차순 정렬 
//(a,b)=>a-b) 오름차순 정렬