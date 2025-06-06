//str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수

function solution(str1, str2) {
    var answer = 0;
    if(str1.includes(str2)){
        answer=1
    }else{
        answer=2
    }
    return answer;
}