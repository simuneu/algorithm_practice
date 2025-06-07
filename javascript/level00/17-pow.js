//어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 
// 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return

function solution(n, t) {
    let time=2**t
    var answer = n*time;
    return answer;
}