// Bài 1
for (let i = 0; i < 1; i++) {
    console.log('    ' + 1 );
    console.log('   ' + 111)
    console.log('  ' + 11111)
    console.log(' ' + 1111111)
    console.log(111111111)
}
// Bài 2
const myArray = [9,7,9,0,7,8,123,456];
const filteredNumber = myArray.filter(num => num % 2 === 0 || num === 0);
console.log(filteredNumber);
// Bài 3
let answer = prompt('Em đã ăn cơm chưa?');
if (answer === 'yes') {
    prompt('Em có muốn ăn bánh ngọt tráng miệng không?')
} else if (answer === 'no') {
    let semiAnswer = prompt('Em có muốn ăn sườn sào chua ngọt không?');
    if (semiAnswer === 'yes') {
        prompt('Thì ăn');
    } else if (semiAnswer === 'no') {
        prompt('Ăn món khác');
    }
} else {
    prompt('Không ăn');
}