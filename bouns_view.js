let valuedate = document.getElementById("valuedate");
let bouns_coustmer_arr=JSON.parse(localStorage.getItem("coustmer_data"))||[]

function show_visit_data(){   
let tabel=''
for (let i = 0; i < bouns_coustmer_arr.length; i++) {
    tabel+=`
              <tr>
                <td>${bouns_coustmer_arr[i].coustmer_name}</td>
                <td>${bouns_coustmer_arr[i].coustmer_phone}</td>
                <td>${bouns_coustmer_arr[i].coustmer_total}</td>
                <td style="color: rgb(14, 226, 14);">${bouns_coustmer_arr[i].bouns}</td>
                <td>${bouns_coustmer_arr[i].time}</td>
              </tr>
    `
    
}
document.getElementById("bouns_view").innerHTML=tabel
}
show_visit_data()


function searchData(value){
    valuedate.innerHTML=value;
    
    let tabel=""
    for (let i = 0; i < bouns_coustmer_arr.length; i++) {
        if (bouns_coustmer_arr[i].time.includes(value)) {
            tabel+=`
              <tr>
                <td>${bouns_coustmer_arr[i].coustmer_name}</td>
                <td>${bouns_coustmer_arr[i].coustmer_phone}</td>
                <td>${bouns_coustmer_arr[i].coustmer_total}</td>
                <td style="color: rgb(14, 226, 14);">${bouns_coustmer_arr[i].bouns}</td>
                <td>${bouns_coustmer_arr[i].time}</td>
              </tr>
    `
        }
        
    }
    document.getElementById("bouns_view").innerHTML=tabel
}


