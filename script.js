// let request = new XMLHttpRequest();
// request.open("GET", "https://6220579cce99a7de195694b6.mockapi.io/api");
// request.send();

// // request.onload = () =>{
// //     console.log(request.responseText);
// //     console.log(request.response);
// //     console.log(request.statusText);
// // };

//  request.onload = () =>{
//      let responseContent = JSON.parse(request.response);
//      responseContent.map((x) =>{
//          console.log(x.name);
//      });
//  };

 //request.onprogress
 // request.onerror 
 //request.onabort


// let btn = document.getElementById("btnsubmit");
// btn.addEventListener("click", () =>{
//  let request = new XMLHttpRequest();
//  request.open("GET", "https://6220579cce99a7de195694b6.mockapi.io/api");
//  request.send();

//    request.onload = () =>{
//     let responseContent = JSON.parse(request.response);

//     responseContent.map((x) =>{
//         let div = document.createElement("div");
//         div.innerText = x.name;
//         console.log(x.name);

//         document.body.appendChild(div);
//     });
//   };

// });

let btn = document.getElementById("btnsubmit");
btn.addEventListener("click", () =>{
 let request = new XMLHttpRequest();
 request.open("GET", "https://6220579cce99a7de195694b6.mockapi.io/api");
 request.send();

 request.onload = () =>{
    let responseContent = JSON.parse(request.response);
    let table = document.createElement("table");
    table.setAttribute("border", 1);

    responseContent.map((x) =>{
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        // td.textContent = x.name;
        // td.innerText  = `<strong> ${x.name}</strong>`;
        td.innerHTML  = `<strong> ${x.name}</strong>`;

        tr.appendChild(td);
        table.appendChild(tr);
        
    });
        
    document.body.appendChild(table);
  
 };

});

// handleSubmit(e) {
//     e.preventDefault();
// }