// Home data
let count_coustmer=document.getElementById("count_coustmer")
let price_coustmer=document.getElementById("price_coustmer")
let Bonus=document.getElementById("Bonus")
let search=document.getElementById("search")
let logout=document.getElementById("logout")
// Home data

// add_coustmer_data
let coustmer_name=document.getElementById("coustmer_name")
let coustmer_phone=document.getElementById("coustmer_phone")
let coustmer_total=document.getElementById("coustmer_total")
let coustmer_deposit=document.getElementById("coustmer_deposit")
let Rem_Amount=document.getElementById("Rem_Amount")
let note=document.getElementById("note")
let submit=document.getElementById("submit")
let rem_click=document.getElementById("rem_click")
// add_coustmer_data

if (logout) {
    logout.onclick=function(){
    location.href="index.html"
}

}


if (rem_click) {
    rem_click.onclick=function(){
    coustmer_deposit.value=coustmer_total.value
    Rem_Amount.innerHTML="0.00"
} 
}

//  الاري لتخزين بيانات العميل
let data_coutmer;

if (localStorage.coustmer_data!=null) {
    data_coutmer=JSON.parse(localStorage.coustmer_data)
}else{
    data_coutmer=[]
}

if (submit) {
    submit.onclick=function(){
    let new_data_coutmer={
        coustmer_name:coustmer_name.value,
        coustmer_phone:coustmer_phone.value,
        coustmer_total:coustmer_total.value,
        coustmer_deposit:coustmer_deposit.value,
        Rem_Amount:Rem_Amount.innerHTML,
        bouns:Number(coustmer_deposit.value * .20).toFixed(2),
        note:note.value,
        time:new Date().toLocaleDateString("en-CA").split("T")[0],
    }
    data_coutmer.push(new_data_coutmer)
    localStorage.setItem("coustmer_data",JSON.stringify(data_coutmer))
    showData_coustmer_add()
    coustmer_name.value=''
    coustmer_phone.value=''
    coustmer_total.value=''
    coustmer_deposit.value=''
    Rem_Amount.innerHTML=''
    note.value=''
    }

}

function get_Rem_Amount(){
   let result= (+coustmer_total.value - +coustmer_deposit.value)
   Rem_Amount.innerHTML=result;
} 


function showData_coustmer_add(){

    let tabel_coustmer_add=document.getElementById("table_coustmer")
    if (!tabel_coustmer_add) {
        return
    }
    let tabel=''
    for (let i = 0; i < data_coutmer.length; i++) {
    tabel +=`
                            <tr onclick="gettotal(${i})">
                            <td>${i+1}</td>
                            <td>${data_coutmer[i].coustmer_name}</td>
                            <td>${data_coutmer[i].coustmer_phone}</td>
                            <td>${data_coutmer[i].coustmer_total}</td>
                            <td>${data_coutmer[i].coustmer_deposit}</td>
                            <td>${data_coutmer[i].Rem_Amount}</td>
                        </tr>
                        `
                    }
  tabel_coustmer_add.innerHTML=tabel;
}

let tabel_coustmer_all = document.getElementById("tabel_coustmer_all");
function showData_coustmer_all(){
    if (!tabel_coustmer_all) return;

    let tabel=''
    for (let i = 0; i < data_coutmer.length; i++) {
        tabel+=`
              <tr>           
                               
                            <td style="display: flex; justify-content: space-between; width: 60px;"><a href="tel:${data_coutmer[i].coustmer_phone}"><i class="fa-solid fa-phone"></i></a>${data_coutmer[i].coustmer_name}</td>
                            <td>${data_coutmer[i].coustmer_total}</td>
                            <td style="color: #ff1865;">${data_coutmer[i].Rem_Amount}</td>
                            <td style="color: rgb(22, 211, 22);">${data_coutmer[i].bouns}</td>
                            <td>${data_coutmer[i].note}</td>
                            <td onclick="delete_coustmer(${i})" ><i class="fa-solid fa-trash" style="color: #ff1865;"></i></td>
                        </tr>
        `
        
    }
    tabel_coustmer_all.innerHTML=tabel
}





function gettotal(i){
  coustmer_name.value=data_coutmer[i].coustmer_name
  coustmer_phone.value=data_coutmer[i].coustmer_phone
  coustmer_total.value=data_coutmer[i].Rem_Amount
  Rem_Amount.innerHTML=0.00
  coustmer_deposit.value=coustmer_total.value
}


function searchData(value){
    console.log(value)
    let tabel=""
    for (let i = 0; i < data_coutmer.length; i++) {
        if (data_coutmer[i].coustmer_name.includes(value)||data_coutmer[i].coustmer_phone.includes(value)||data_coutmer[i].time.includes(value)) {
             tabel+=`
              <tr>           
                               
                            <td style="display: flex; justify-content: space-between; width: 60px;"><a href="tel:${data_coutmer[i].coustmer_phone}"><i class="fa-solid fa-phone"></i></a>${data_coutmer[i].coustmer_name}</td>
                            <td>${data_coutmer[i].coustmer_total}</td>
                            <td style="color: #ff1865;">${data_coutmer[i].Rem_Amount}</td>
                            <td style="color: rgb(22, 211, 22);">${data_coutmer[i].bouns}</td>
                            <td>${data_coutmer[i].note}</td>
                            <td><i class="fa-solid fa-trash" style="color: #ff1865;"></i></td>
                        </tr>
        `
        }
        
    }
    tabel_coustmer_all.innerHTML=tabel
}

// delete_coustmer
function delete_coustmer(i){
    data_coutmer.splice(i,1)
    localStorage.setItem("coustmer_data",JSON.stringify(data_coutmer))
    showData_coustmer_all()
    showData_coustmer_add();
}
// delete_coustmer



// dataHome

// bouns
let bouns_view=document.getElementById("Bonus")
let result_bouns=0
for (let i = 0; i < data_coutmer.length; i++) {
    result_bouns+= +data_coutmer[i].bouns   
}
if (bouns_view) {
    bouns_view.innerHTML=result_bouns
}

// bouns
// visit
let result_visit=0
let visit_data=JSON.parse(localStorage.getItem("visit_coustmer"))||[]
for (let i = 0; i < visit_data.length; i++) {
   result_visit+= +visit_data[i].visit_coustmer_amount   
}
let visit_price=document.getElementById("visit_price")
let visit_coustmer =document.getElementById("visit_coustmer")
if (visit_price) {
    
    visit_price.innerHTML=result_visit;
}
if (visit_coustmer) {
    
   visit_coustmer.innerHTML=visit_data.length;
}

// visit




// dataHome






















showData_coustmer_all()
showData_coustmer_add()