// const student = {
//     fullName : "rahul kumar",
//     isPass:true,
//     cgpa:8.9,
//     agge:24
// };

// for(let Key in student){
//     console.log(Key,"=>",student[Key]);
// }
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// reenter:
// while(true){
//     let num=parseInt(prompt("Guess the number :"));
//     let randomno=67;
//     while(num!=randomno){
//         if(num<randomno){
//             alert("your entered number is smaller than actual number");
//             continue reenter;
//         }
//         else if(num>randomno){
//             alert("your entered number is greater than actual number");
//             continue reenter;
//         }
//     }
//     if(num==randomno){
//         alert("Correct");
//         break;
//     }
// }

// let username = prompt("Enter your full name :");
// username = "@"+username+username.length ;
// console.log(username);
// let marks = [85,97,44,37,76,60];
// let total=0;
// for(let i=0;i<6;i++){
//     total=marks[i]+total;
// }
// let avg = total/6;
// console.log(`Avg of the marks = ${avg}`);

let arr = [250,645,300,900,50];

for(let i=0;i<arr.length;i++){
    arr[i]=arr[i] - (arr[i]*(10/100));
}

for(let i=0;i<arr.length;i++){
    console.log(`dicounted price ${arr[i]}`);    
}
