//할머니께 생신 축하 편지를 쓰려고 합니다. 할머니가 보시기 편하도록 
// 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 
// 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return

function solution(message) {
    let msgArr= message.split("");
    var answer = msgArr.length *2;
    return answer;
}