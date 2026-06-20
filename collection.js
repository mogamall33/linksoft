let collection=document.querySelectorAll("tbody tr")

let coustmer_collection=document.getElementById("coustmer_collection")

let amount_collection=document.getElementById("amount_collection")

let coustmer_dis_collection=document.getElementById("coustmer_discollection")

let amount_dis_collection=document.getElementById("amount_discollection")

let count_collection=0

let counter_amount_collection=0

let count_discollection=collection.length

let amount_discollection=100

collection.forEach(function(collec,index){

    let td_icon=collec.querySelector("i")

    let td_span=collec.querySelector("span")

    
    

    collec.onclick=function(){
        collec.classList.toggle("checked")

       
        if (collec.classList.contains("checked")) {

            td_icon.classList.remove("fa-hourglass-half")

            td_icon.classList.add("fa-check")

            count_collection++

            counter_amount_collection+= +td_span.innerHTML

            count_discollection--


            // td_icon.style.color="green"
        }else{

            td_icon.classList.add("fa-hourglass-half")

            td_icon.style.color="white"

            count_collection--

            counter_amount_collection-= +td_span.innerHTML

            count_discollection++

        }

        coustmer_collection.innerHTML=count_collection

        amount_collection.innerHTML=counter_amount_collection

        coustmer_dis_collection.innerHTML=count_discollection

        amount_dis_collection.innerHTML=count_discollection
    }

})
