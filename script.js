//your code here
let textarea = document.querySelector('#evaluatedText');
let tcount = document.querySelector('#tcount');
let wcount = document.querySelector('#wcount');
let scount = document.querySelector('#scount');

function keycount() {



    let word = textarea.value.split(/\s+/).filter(e =>{return (e.length !== 0)} ).length

     wcount.innerHTML = word;

    let textcount = textarea.value.replace(/\s|\n/g, "").length;

     tcount.innerHTML = textcount;

  
}