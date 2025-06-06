// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 
// 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return

function solution(n) {
    var answer = Number.isInteger(Math.sqrt(n))?1:2;
    return answer;
}

//Number.isInteger 정수인지 아닌지
//Math.sqrt() 제곱근 구하는 함수