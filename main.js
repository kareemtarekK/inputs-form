let input_number = document.querySelector("[name=number]");
let input_text = document.querySelector("[name=text]");
let select_input = document.querySelector("[name=div_section]");
let submit_input = document.querySelector("[name=submit]");
let div_result = document.querySelector(".result");
let form = document.querySelector("form");
/*
styling form
*/
form.style.cssText="height:300px;border-radius:7px;padding:30px;background-color:#eee;margin:15px 5px; display:grid;gap:30px;justify-content:center; align-items: center;";
input_number.style.cssText="width:350px;padding:10px; font-size:19px; font-weight:bold;border:solid blue 1.5px; outline:none";
input_text.style.cssText="padding:10px;width:350px; font-size:19px; font-weight:bold;border:solid blue 1.5px; outline:none";
select_input.style.cssText="padding:10px;width:370px; font-size:19px; font-weight:bold;border:solid blue 1.5px; outline:none";
submit_input.style.cssText="padding:15px 15px;width:fit-content;margin:0px auto;background-color:orange;color:white;font-size:19px;cursor:pointer;border:none;border-radius:5px";
document.body.style.backgroundColor="#262934";
/*
coding for operation
*/
submit_input.onclick=(e)=>{
  /*stop submitting on reloading */
  e.preventDefault();
  /* to clean old divs  */
  div_result.innerHTML="";
  let type = select_input.value;
  let text = input_text.value;
  let nums = input_number.value;
  for(let i=0;i<nums;i++){
    let divs=document.createElement(type);
    divs.className="box";
    divs.title="Element";
    divs.id=i+1;
    divs.textContent=text;
    divs.style.cssText="background-color:white;padding:30px 15px;margin-top:15px;background-color:orangered;text-align:center;font-weight:bold";
    div_result.style.cssText="display:grid;grid-template-columns:repeat(auto-fill,minmax(50px,150px));gap:15px;justify-content: center;align-items: center;"
    div_result.appendChild(divs);
  }
}
