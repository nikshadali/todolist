var list = document.getElementById("list");
var inpVal = document.getElementById("inpVal");

function addEvent(){
   
   

    //create li 
    var li = document.createElement("li");
    li.setAttribute("class","li")

    // create text
    var liText = document.createTextNode(inpVal.value);

    // insert text into li
    li.appendChild(liText)


    //insert li into list

    list.appendChild(li)

    var ediBtn = document.createElement("button");
    var ediText = document.createTextNode("Edit");
    ediBtn.setAttribute("class","btn btn-danger btn-sm float-right pl-4 pr-4");
    ediBtn.setAttribute("onclick","ediItem(this)")
    ediBtn.appendChild(ediText)
    li.appendChild(ediBtn)



    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Remove");
    delBtn.setAttribute("class","btn btn-danger btn-sm float-right mr-3");
    delBtn.setAttribute("onclick","delItem(this)");
    delBtn.appendChild(delText)
    li.appendChild(delBtn)

   
    
    // empty input value

    inpVal.value = "";
    console.log(li)

    //creat delete btn

   

    
}

function delItem(e){
    e.parentNode.remove();
    console.log(e.parentNode)

}

function delAll(){
    list.innerHTML = "";
    console.log("helo")
}

function ediItem(edi){

    var editItem = edi.parentNode.firstChild.nodeValue;
    editVal= prompt("Edit Value", editItem);
    edi.parentNode.firstChild.nodeValue = editVal

 

 

}