

// starting Index , Ending Index - 1 

// splice :- modifies array (starting index, deletion  insertion1 , insertion 2 ......)
// let arr=[1,2,3,4]
// console.log(arr.splice(1))
// console.log(arr.splice(1,2))
// console.log(arr.splice(1,2,5))
// console.log(arr.splice(1,2,5,6))
// console.log(arr)


// slice :-
// let arr=[1,2,3,4] 
// console.log(arr.slice(1))
// console.log(arr.slice(-2))
// console.log(arr.slice(10))
// console.log(arr.slice(1,3))
// console.log(arr)




// there are two ways to declare an obejct :- constructor / literals 


// (A) constructor : 
// const obj = new Object();
// obj.name ='yash'
// console.log(typeof obj)
// console.log(obj)

// (B) literalls :- 
// const users = {
//     name: 'yash',
//     'roll number ': 1234561234,
//     subject : 'fee'
// }

// change object value 
// users.name = "somaya singh";
// console.log(users)

// 1 . accessing the object value 
// console.log(users.name)
// console.log(users['name'])
// console.log(users['roll number'])

// 3. object inside an object :- 
// let users = {
//     user1 :{
//     name: 'devdutt',
//         age: 24
// },
// user2 :{
//     name: 'yash',
//     age: 24
// }}
// console.log(users.user2.age);
// let users ={
//     user1 :{
//         Name: 'abc',
//         age:{
//             user2: {
//                 Name: 'cde',
//                 age:20
//             }
//         }
//     }
// }
// console.log(users.user1.age.user2.age)

// 4. object inside an arraay;
// let arr = [{
//     Name : 'krish'
// },
// {
//     Name : 'yash',
//     'rollnumber': 1234567
// }
// ]
// console.log(arr[2].Name)

// 5. merge object :- 
// obj1 ={
//     name1: 'kanav',
//     age:24
// }
// obj2 ={
//     name1: 'kanav',
//     age:24
// }
// obj3 ={
//     name1: 'kanav',
//     age:24
// }
// console.log(obj3)