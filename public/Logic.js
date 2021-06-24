

function run(){
    let htmlCode=document.querySelector("#htmlCode").value;
    let cssCode="<style>"+document.querySelector("#cssCode").value+"</style>";
    let jsCode=document.querySelector("#jsCode").value;
    let output=document.querySelector("#preview-window");
    output.contentDocument.body.innerHTML=htmlCode+cssCode;
    output.contentWindow.eval(jsCode);

  }