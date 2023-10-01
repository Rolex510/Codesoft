let a=document.getElementById("outputDisplay")
let d='0'
let isOpActive=false
let isValZero=true
display(d)

function clearDisplay()
{
   a.innerText=0
   if(Boolean(isValZero))
   {
       a.innerText=''
   }
    return
}
function display(val)
{
    if(a.innerText===d || Boolean(isOpActive))
   {
       isValZero=true
       clearDisplay()
       isOpActive=false
   }
    a.innerText+=val
    isValZero=false
    return          
}
function solve()
{
    let x=a.innerText
    try{
        eval(x)
    }
    catch(err)
    {
        alert(err.message)
        clearDisplay()
    }
   clearDisplay()
    display(eval(x))
    isValZero=false
    isOpActive=true
}