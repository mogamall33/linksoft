const coustmer_coll = document.getElementById("coustmer_coll");
let amount_collection=document.getElementById("amount_collection")
let coustmer_collection=document.getElementById("coustmer_collection")
let amount_discollection=document.getElementById("amount_discollection")


// localStorage.clear()
fetch("coustmer_collection.json")
.then(response => response.json())
.then(data => {
    let localStorage_data=JSON.parse(localStorage.getItem("coustmer_collection"))||[]
    data.forEach(coustmer => {        
        
    let isinlocal=localStorage_data.some(dataF=>dataF.id===coustmer.id)
            
        coustmer_coll.innerHTML+=`
        <tr class="btn ${isinlocal?"activew":""}" data-id="${coustmer.id}">
        <td>${coustmer.id}</td>
        <td>${coustmer.name}</td>
        <td><span>${coustmer.amount}</span></td>
        <td calss="icon"><i class="fa-solid ${isinlocal?"fa-check":"fa-hourglass-half"}"></i></td>
        </tr>
        `

    });
    tr_btn=document.querySelectorAll(".btn")
    tr_btn.forEach(btn=>{
        btn.onclick=function(){
            btn.classList.toggle("activew")

            if (btn.classList.contains("activew")) {

                const btnId=+this.getAttribute("data-id")
                
                const selectCoustmer=data.find(coustm=>coustm.id===btnId)

                console.log(selectCoustmer)
                
                addTOlocalstorage(selectCoustmer)
                

            }else if (!btn.classList.contains("activew")) {
                

                 const btnId=+this.getAttribute("data-id")

                const selectCoustmer=data.find(coustm=>coustm.id===btnId)

                console.log(selectCoustmer.name)

                removeTOlocalstorage(selectCoustmer)


            }
        }
    })
})




let coustmer_coll_arr=JSON.parse(localStorage.getItem("coustmer_collection"))||[]
let lsresult= Number(localStorage.getItem("result"))||0
amount_collection.innerHTML=lsresult
let result_price=+lsresult;


let coustmer_collection_count=0 
let coustmer_discollection_count=coustmer_coll_arr.length

function addTOlocalstorage(id){

    coustmer_coll_arr.push(id)

    result_price+=id.amount

    console.log(id.amount)

    console.log(result_price)

    amount_collection.innerHTML=result_price

    localStorage.setItem("coustmer_collection",JSON.stringify(coustmer_coll_arr))

    localStorage.setItem("result",result_price)

    coustmer_collection_count++
    coustmer_collection.innerHTML=coustmer_collection_count
}




function removeTOlocalstorage(customer) {

    const index = coustmer_coll_arr.findIndex(
        item => item.id === customer.id
    );

    const price=coustmer_coll_arr.find(coustmer_price=>coustmer_price.amount===customer.amount)
    console.log(`price price${price.amount}`);

    result_price-=+price.amount

    console.log(result_price)

    localStorage.setItem("result",result_price)

    amount_collection.innerHTML=result_price
    
    coustmer_collection_count--
    coustmer_collection.innerHTML=coustmer_collection_count

    if (index !== -1) {
        coustmer_coll_arr.splice(index, 1);
    }

    localStorage.setItem(
        "coustmer_collection",
        JSON.stringify(coustmer_coll_arr)
    );
}









//     result = data;
//     showData();
// });

// function showData() {

//     coustmer_coll.innerHTML = "";

//     result.forEach(coustmer => {
//         coustmer_coll.innerHTML += `
//             <tr data-id="${coustmer.id}">
//                 <td>${coustmer.id}</td>
//                 <td>${coustmer.name}</td>
//                 <td><span>${coustmer.amount}</span></td>
//                 <td><i class="fa-solid fa-hourglass-half"></i></td>
//             </tr>
//         `;
//     });

//     const rows = document.querySelectorAll("#coustmer_coll tr");

//     rows.forEach(row => {

//         row.addEventListener("click", function () {

//             this.classList.toggle("activew");

//             const rowId = Number(this.dataset.id);

//             const selectCustomer = result.find(customer => customer.id === rowId);

//             addtoLocalStorage(selectCustomer);

//         });

//     });

// }

// function addtoLocalStorage(customer){

//     let customers = JSON.parse(localStorage.getItem("customers")) || [];

//     customers.push(customer);

//     localStorage.setItem("customers", JSON.stringify(customers));

//     console.log(customers);

// }











// const coustmer_coll = document.getElementById("coustmer_coll");
// let result = [];

// fetch("coustmer_collection.json")
// .then(response => response.json())
// .then(data => {

//     result = data;

//     showData();
// });

// function showData() {

//     coustmer_coll.innerHTML = "";

//     result.forEach(coustmer => {

//         coustmer_coll.innerHTML += `
//             <tr data-id="${coustmer.id}">
//                 <td>${coustmer.id}</td>
//                 <td>${coustmer.name}</td>
//                 <td><span>${coustmer.amount}</span></td>
//                 <td><i class="fa-solid fa-hourglass-half"></i></td>
//             </tr>
//         `;

//         let tr=document.querySelectorAll("tbody tr")
//         tr.forEach(row=>{
//            row.onclick=function(){
//             row.classList.toggle("activew")
//             let rowId=row.getAttribute("data-id")
//             console.log(rowId)
//             const selectcoustmer=data.find(cousmer=>cousmer.id===rowId)
//             addtoLocalStorage(selectcoustmer)
//            }
//         })
        

//     });

// }



// function addtoLocalStorage(coustmer){

// }



// // fetch("coustmer_collection.json")
// // .then(response => response.json())
// // .then(data=>{
// //     data.forEach(coustmer => {
// //         coustmer_coll.innerHTML+=`
// //          <tr onclick="selectCoustmer(${coustmer.id})">
// //                                <td id="${coustmer.id}">${coustmer.id}</td>
// //                                <td>${coustmer.name}</td>
// //                                <td><span>${coustmer.amount}</span></td>                            
// //                                 <td><i class="fa-solid fa-hourglass-half"></i></td> 
// //                           </tr>
// //         `
// //         collectionTR=document.querySelectorAll("tbody tr")
// //         collectionTR.forEach(tr => {
// //                 tr.addEventListener("click",(event)=>{
// //                     tr.classList.toggle("checked")
// //                     let td_icon=tr.querySelector("i")

// //                      if (tr.classList.contains("checked")) {

// //             td_icon.classList.remove("fa-hourglass-half")

// //             td_icon.classList.add("fa-check")

// //             td_icon.style.color="red"
// //    }else{

// //           td_icon.classList.add("fa-hourglass-half")

// //             td_icon.style.color="white"
// //      }


// //                 })
// //         });
// //     });
// // })

// // function selectCoustmer(id){
// //     console.log(id)
// // }































// // //     data.forEach((coustmer,index) => {
// // //                 coustmer_coll.innerHTML+=`
// // //                 <tr>
// // //                                 <td id="${coustmer.id}">${coustmer.id}</td>
// // //                                 <td>${coustmer.name}</td>
// // //                                 <td><span>${coustmer.amount}</span></td>
// // //                                 <td><i class="fa-solid fa-hourglass-half"></i></td> 
// // //                             </tr>

// // //                 `
  

// // //     let collection=document.querySelectorAll("tbody tr")
// // //     collection.forEach(tr => {
// // //         tr.addEventListener("click",(event)=>{
// // //             tr.classList.toggle("checked")
// // //                 let td_icon=tr.querySelector("i")

// // //                  let td_span=tr.querySelector("span")

// // //               if (tr.classList.contains("checked")) {

// // //             td_icon.classList.remove("fa-hourglass-half")

// // //            td_icon.classList.add("fa-check")

// // //         //    count_collection++

// // //         //   counter_amount_collection+= +td_span.innerHTML

// // //         //  count_discollection--

// // //           td_icon.style.color="green"

// // //           coustmer[index].collected=true
// // //           console.log(coustmer[index].collected)
// // //           localStorage.setItem("collected_data",JSON.stringify(data))
          
// // //       }else{

// // //          td_icon.classList.add("fa-hourglass-half")

// // //          td_icon.style.color="white"

// // //         //  count_collection--

// // //         // counter_amount_collection-= +td_span.innerHTML

// // //         //   count_discollection++

// // //         coustmer.collected=false
// // //         console.log(coustmer.collected)
// // //         localStorage.setItem("collected_data",JSON.stringify(data))

// // //         }
        
// // //     });
// // // })
// // //  });

// // // })



// // // // let collection=document.querySelectorAll("tbody tr")

// // // // let coustmer_collection=document.getElementById("coustmer_collection")

// // // // let amount_collection=document.getElementById("amount_collection")

// // // // let coustmer_dis_collection=document.getElementById("coustmer_discollection")

// // // // let amount_dis_collection=document.getElementById("amount_discollection")

// // // // let count_collection=0

// // // // let counter_amount_collection=0

// // // // let count_discollection=collection.length

// // // // let amount_discollection=100

// // // // collection.forEach(function(collec,index){

// // // //     let td_icon=collec.querySelector("i")

// // // //     let td_span=collec.querySelector("span")

    
    

// // // //     collec.onclick=function(){
// // // //         collec.classList.toggle("checked")

       
// // // //         if (collec.classList.contains("checked")) {

// // // //             td_icon.classList.remove("fa-hourglass-half")

// // // //             td_icon.classList.add("fa-check")

// // // //             count_collection++

// // // //             counter_amount_collection+= +td_span.innerHTML

// // // //             count_discollection--


// // // //             // td_icon.style.color="green"
// // // //         }else{

// // // //             td_icon.classList.add("fa-hourglass-half")

// // // //             td_icon.style.color="white"

// // // //             count_collection--

// // // //             counter_amount_collection-= +td_span.innerHTML

// // // //             count_discollection++

// // // //         }

// // // //         coustmer_collection.innerHTML=count_collection

// // // //         amount_collection.innerHTML=counter_amount_collection

// // // //         coustmer_dis_collection.innerHTML=count_discollection

// // // //         amount_dis_collection.innerHTML=count_discollection
// // // //     }

// // // // 
