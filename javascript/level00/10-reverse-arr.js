//정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. 
// num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return
function solution(num_list) {
    var answer = [];
    for(let i=num_list.length-1 ; i>=0; i--){
        answer.push(num_list[i])
    }
    
    return answer;
}