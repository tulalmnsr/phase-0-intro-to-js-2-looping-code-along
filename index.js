// Code your solutions in this file
const message=[]
function writeCards(names,event){
    for (let i = 0; i < names.length; i++){
      message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
      debugger;
    }
    return message
}
function countDown(num){
    let countDown = num;
while (countDown >=0) {
  console.log(countDown--);
}
}
