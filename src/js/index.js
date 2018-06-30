import  '../css/style.css'; 


// class Client {
//     constructor(firstName , lastName){
//         this.firstName = firstName;
//         this.lastName = lastName; 
//     }    

//     displayName(){
//         return `Name is ${this.firstName}  ${this.lastName}`; 
//     }
// }

// let client = new Client("Ivan", "Ivanov"); 
// console.log(client.displayName());
console.log("Index js");
console.log("New..");


const clients = ["Client1", "Client2", "Client3", "Client4", "Client5", "Client6"];
let html = ""; 
clients.forEach(client => {
    html += `
        <li>${client}</li>
    `;
});

document.querySelector('#clients').innerHTML = html; 

