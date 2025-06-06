//문자열 my_string과 문자 letter이 매개변수로 주어집니다. 
// my_string에서 letter를 제거한 문자열을 return


function solution1(my_string, letter) {
    var answer =  my_string.split(letter).join("");
    console.log(answer)
    return answer;
}

solution1('abCjC', 'C');
