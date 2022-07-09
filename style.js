let addwork=document.getElementById("addwork");
let inputf=document.getElementById("inputf");
let disp=document.getElementById("disp");

inputf.addEventListener("keyup",(e)=>{
    console.log(e);
    
    if(e.target!=undefined){
        e.target.value=e.target.value.toUpperCase();
    }
    
    
    })


addwork.addEventListener("click",function(e){
    e.target.style.backgroundColor="yellow";

    let label=document.createElement("label");
    label.classList.add("style");
    label.innerText=(inputf.value );
    disp.appendChild(label);
    inputf.value="";
    label.style.backgroundColor="grey";
   disp.style.overflow="scroll";




    
    let done=document.createElement("button");
    done.setAttribute("type","submit");
    done.setAttribute("value","Done");
    done.classList.add("done");
    done.innerHTML="Done";
    label.appendChild(done);


    let deleto=document.createElement("button");
    deleto.setAttribute("type","submit");
    deleto.setAttribute("value","delete");
    deleto.classList.add("delete");
    deleto.innerHTML="Delete";
    label.appendChild(deleto);
    let br=document.createElement("br");
    br.classList.add("br");
    label.appendChild(br);

    done.addEventListener("click",function(e){
        e.target.style.backgroundColor="red";
        label.style.textDecoration="line-through";
        label.style.backgroundColor="yellow"
 
    })
    deleto.addEventListener("click",function(e){
        e.preventDefault();
        deleto.innerHTML="Delete";
done.innerHTML="Done";




if (confirm("Delete this leson :"+inputf.value)) {
    disp.removeChild(label);
    return true;
  } else {
    return false;
  }


       

    })


})
