class items{
    constructor(name,cname){
        this.name=name;
        this.className=cname;
    }
}
var myText=document.getElementById('input-text');
myText.addEventListener('keydown',addelement);
var list=document.getElementById('list-items');
function addelement(event){
    if(event.key === 'Enter' && !(myText.value.trim()==='') ){
        var it=new items(myText.value,'items');
        var div=document.createElement('div');
        div.className='lists'
        var label1=document.createElement('label');
        var cross=document.createElement('label');
        cross.innerHTML='X';
        cross.className='cross';
        label1.innerHTML=it.name;
        label1.className=it.className;
        div.appendChild(label1);
        div.appendChild(cross);
        list.appendChild(div);
        myText.value='';
       
    }
}
list.addEventListener('click',done);
function done(e){
    console.log(e.target.className);
    if(e.target.className === 'cross'){
        e.target.parentNode.remove();
        console.log(e.target.parentNode);
    }
    if(e.target.className === 'lists' || e.target.className === 'done' )
    if(e.target.className === 'lists'){
        e.target.setAttribute("class","done");
        console.log('yes');
    }
    else{
        e.target.setAttribute("class", "lists");
    }
}
var tt=document.getElementById('cc');
myText.addEventListener('keydown',trigger);
list.addEventListener('click',trigger);
function trigger(){
var undonecount=document.getElementsByClassName('lists');
var c=0;
if(undonecount!=undefined){
for(var i=0;i<undonecount.length;i++){
    c++;
}
console.log(c);
}
document.getElementById('undone-count').innerHTML=c;
var donecount=document.getElementsByClassName('done');
var f=0;
for(var i=0;i<donecount.length;i++){
    f++;
}
console.log(f);
document.getElementById('done-count').innerHTML=f;
document.getElementById('cart-count').innerHTML=(c+f);
}
var hide=document.getElementById('hide-btn');
hide.addEventListener('click',hidebtn);
function hidebtn(){
    var items=document.getElementsByClassName('done');
    console.log(items);
    for(var i of items){
        if(i.style.display==='none'){
            i.style.display='block';
        }
        else{
            i.style.display='none';
            // i.setAttribute('class','hide');
            console.log(i.className)
        }
       
    }
    
}