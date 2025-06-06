// 정수가 담긴 리스트 num_list가 주어질 때,
//  num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을
//  return 하도록 solution 함수

function solution(num_list) {
    var answer = [];
    let even =[];
    let odd=[];
    for(let i =0; i<num_list.length; i++){
        if(num_list[i]%2===0){
            even.push(num_list[i])
        }else{
            odd.push(num_list[i])
        }
    }
    answer.push(even.length);
    answer.push(odd.length)
    return answer;
}


function solution(num_list) {
    var answer = [0, 0];

    for (let i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 === 0) {
            answer[0]++;
        } else {
            answer[1]++;
        }
    }

    return answer;
}