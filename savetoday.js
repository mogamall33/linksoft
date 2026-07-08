let transactionType=document.getElementById("transactionType")

let inp=document.getElementById("inp")
let opr=document.getElementById("opr")
let note=document.getElementById("note")
let submit=document.getElementById("submit")


let LsValue=JSON.parse(localStorage.getItem("savetoday"))||0;
let saveToDay=LsValue;

let oprationDataArr=JSON.parse(localStorage.getItem("oprationData"))||[]




    submit.addEventListener("click",()=>{
   
        let oprationValue=transactionType.value
        opration(oprationValue)
        console.log(oprationDataArr);
        
        if (oprationValue!=="العملية") {
            
            let oprationSave={
                transactionType:transactionType.value,
                inp:inp.value,
                balance:saveToDay,
                opr:opr.value,
                note:note.value,
                time:new Date().toLocaleDateString("en-CA").split("T")[0],
            }
            
            oprationDataArr.push(oprationSave)
            localStorage.setItem("oprationData",JSON.stringify(oprationDataArr))
        }


       
        inp.value=""
        opr.value=""
        note.value=""






        showData_save_to_day()
    })
    
    
    
    function opration(value){
        if (value=="العملية") {
            transactionType.style.background="red"
        }else{

        if (value=="سحب") {
            console.log(value);
            if (inp.value>saveToDay) {
                console.log("sorry");
                
            }else{
                
                saveToDay-=inp.value
                localStorage.setItem("savetoday",saveToDay)
                console.log(saveToDay);
            }
        }
        
        if (value=="ايداع") {
            console.log(value);
            saveToDay+=+inp.value
            localStorage.setItem("savetoday",saveToDay)
            console.log(saveToDay);
        }
        if (value=="سداد") {
            console.log(value);
            saveToDay-=+inp.value
            localStorage.setItem("savetoday",saveToDay)
            console.log(saveToDay);

        }
        if (value=="تحصيل") {
            console.log(value);
            saveToDay+=+inp.value
            localStorage.setItem("savetoday",saveToDay)
            console.log(saveToDay);

        }
        if (value=="مصروف") {
            console.log(value);
            saveToDay-=+inp.value
            localStorage.setItem("savetoday",saveToDay)
            console.log(saveToDay);

        }
    }
     }
    
    
    
    
     function showData_save_to_day(){
            

         
         let table_save_to_day=document.getElementById("table_save_to_day")
         table_save_to_day.innerHTML=''
         oprationDataArr.forEach((oper,index) => {
        let colorclass=""
            if (oper.transactionType=="سحب"||oper.transactionType=="مصروف"||oper.transactionType=="سداد") {
                colorclass="money-minus"

            }else if (oper.transactionType=="تحصيل"||oper.transactionType=="ايداع") {
                colorclass="money-plus"
            }




    table_save_to_day.innerHTML+=`
       <tr>
                      <td>${oper.time}</td>
                      <td>${oper.transactionType}</td>
                      
                      <td> 
                      <input class="${colorclass}" onchange="update_amount(${index},this.value)"
                      value="${oper.inp}"
                       type="number"> 
                       </td>

                      <td>${oper.balance}</td>
                      <td>${oper.opr}</td>
                      <td>
                            <textarea
                                onchange="updateNote(${index}, this.value)"
                                rows="2"
                                style="width:100%; resize:vertical;">${oper.note || ''}</textarea>
                      </td>
                    </tr>
    `
    });
     }


     function  updateNote(index,value){
        oprationDataArr[index].note=value;
         localStorage.setItem("oprationData",JSON.stringify(oprationDataArr))
     } 



     function update_amount(index,value){
        oprationDataArr[index].inp=value;
        localStorage.setItem("oprationData",JSON.stringify(oprationDataArr))
     }

     showData_save_to_day()

    // localStorage.clear()



    let arr_coustmer_data=JSON.parse(localStorage.getItem("coustmer_data"))||[]


    let allArray=[...arr_coustmer_data,...oprationDataArr]

    for (let i = 0; i < allArray.length; i++) {
        if (allArray[i].inp==NaN) {
            
            allArray[i].inp="لاgh"
        }
        console.log(allArray[i])
    }