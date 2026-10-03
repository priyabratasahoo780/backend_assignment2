  const input = document.getElementById("nameinput");
    const result = document.querySelector("#result");
   const colorChanger = document.getElementById("colorChanger");

  
function ShowName() {
  
  if(input.value === ""){
    colorChanger.textContent = "Please enter your name";
    return;
  }
    result.textContent = `Hello, ${input.value}`;

    input.value = "";
    // random color code
    
    colorChanger.textContent = "galti se mistake...";
    colorChanger.style.color= "#"+Math.floor(Math.random()*16777215).toString(16);
    colorChanger.style.fontSize="20px";
    colorChanger.style.backgroundColor= "#"+Math.floor(Math.random()*16777215).toString(16);
}