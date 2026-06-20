let visit_coustmer_name=document.getElementById("visit_coustmer_name")
let visit_coustmer_number=document.getElementById("visit_coustmer_number")
let visit_coustmer_amount=document.getElementById("visit_coustmer_amount")
let visit_coustmer_note=document.getElementById("visit_coustmer_note")
let visit_submit=document.getElementById("visit_submit")
// Visit_data

let visit_coustmer_arr;
if (localStorage.visit_coustmer!=null) {
    visit_coustmer_arr=JSON.parse(localStorage.visit_coustmer)
}else{
    visit_coustmer_arr=[]
}


    visit_submit.onclick=function(){
    let visit_coustmer_data={
        visit_coustmer_name:visit_coustmer_name.value,
        visit_coustmer_number:visit_coustmer_number.value,
        visit_coustmer_amount:visit_coustmer_amount.value,
        visit_coustmer_note:visit_coustmer_note.value,
    }
    visit_coustmer_arr.push(visit_coustmer_data)
    localStorage.setItem("visit_coustmer",JSON.stringify(visit_coustmer_arr))

    visit_coustmer_name.value=''
    visit_coustmer_number.value=''
    visit_coustmer_amount.value=''
    visit_coustmer_note.value=''

}

function show_visit_data(){   
let tabel=''
for (let i = 0; i < visit_coustmer_arr.length; i++) {
    tabel+=`
              <tr>
                <td>${visit_coustmer_arr[i].visit_coustmer_name}</td>
                <td>${visit_coustmer_arr[i].visit_coustmer_name}</td>
                <td>${visit_coustmer_arr[i].visit_coustmer_name}</td>
                <td>${visit_coustmer_arr[i].visit_coustmer_name}</td>
              </tr>
    `
    
}
document.getElementById("visit_view").innerHTML=tabel
}
