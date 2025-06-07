//영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 
// 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return

function solution(my_string) {
    
    var answer = my_string.replace(/[aeiou]/g, "");
    return answer;
}

//정규표현식으로 해당하는 모든 글자 다 빼기 /[글자자]/g