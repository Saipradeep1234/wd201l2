let z1=document.getElementById("indu-form");
const z2 =() => {
    let z3= localStorage.getItem("indu-ent");
    if(z3){
        z3=JSON.parse(z3);

    }else{
        z3=[];
    }
    return z3;
}

let z4 =z2();
const z5 =() =>{
    const z6=z2();
    const z7=z6.map((entry) => {
        
        const nameindu= `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailindu= `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordindu= `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobindu= `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermsindu= `<td class='border px-4 py-2'>${entry.acceptedTermsAndConditions}</td>`;
        const rowindu= `<tr>${nameindu} ${emailindu} ${passwordindu} ${dobindu} ${acceptTermsindu}</tr>`;
        return rowindu;
    }).join("\n");
    const table= `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">Dob</th>
    <th class="px-4 py-2">Accepted terms?</th>
    </tr>${z7} </table>`;
    let details=document.getElementById("indu-ent");
    details.innerHTML = table;
}
const z8 = (event) => {
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("dob").value;
    const acceptedTermsAndConditions=document.getElementById("acceptTerms").checked;
    const entry={
        name,
        email,
        password,
        dob,
        acceptedTermsAndConditions
    };
    z4.push(entry);
    localStorage.setItem("indu-ent",JSON.stringify(z4));
    z5();
}
z1.addEventListener("submit",z8);
z5();
//----------------------------------------------------------DATE VALIDATION-----------------------------------------

   
        function valdatecondition()
        {   let element= document.getElementById("dob");
            const dob = document.getElementById("dob").value;
            let indu1=new Date(dob);
            var todaydate = new Date(); 
            var age=parseInt(todaydate.getFullYear()) - parseInt(indu1.getFullYear());
            if (todaydate.getMonth() < indu1.getMonth() || (todaydate.getMonth() === indu1.getMonth() && todaydate.getDate() < indu1.getDate()))
             age--;
            if(!(age>18 && age <55))
            {
                element.setCustomValidity(" Entered age is not valid and age should between 18 and 55");
                element.reportValidity();
            }
            else{
            element.setCustomValidity("");
            }
        }

//=======================================email=========================================
const z9 = document.getElementById("email");

z9.addEventListener("input", () => validate(z9));

function validate(z10) {
  if (z10.validity.typeMismatch) {
    z10.setCustomValidity("Wrong email format");
    z10.reportValidity();
  } else {
    z10.setCustomValidity("");
  }
}