// 문자열 my_string이 매개변수로 주어집니다. 
// my_string을 거꾸로 뒤집은 문자열을 return

function solution(my_string) {
    var arr = my_string.split("")
    var arr2 = arr.reverse()
    var answer=arr2.join("")
    return answer;
}