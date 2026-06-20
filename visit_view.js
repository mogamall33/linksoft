function show_visit_data(){   
    let visit_coustmer_arr2=JSON.parse(localStorage.getItem("visit_coustmer"))||[]
let tabel=''
for (let i = 0; i < visit_coustmer_arr2.length; i++) {
    tabel+=`
              <tr>
                <td>${visit_coustmer_arr2[i].visit_coustmer_name}</td>
                <td>${visit_coustmer_arr2[i].visit_coustmer_number}</td>
                <td>${visit_coustmer_arr2[i].visit_coustmer_amount}</td>
                <td>${visit_coustmer_arr2[i].visit_coustmer_note}</td>
              </tr>
    `
    
}
document.getElementById("visit_view").innerHTML=tabel
console.log(visit_coustmer_arr2)
}
show_visit_data()
