const buttons = document.querySelectorAll('button');
const copy_html = document.querySelector('#copy-content');
const data_html = document.querySelector('.content');


buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        let myEvent = button.dataset['command'];
        if(myEvent === "createLink"){
            let url = prompt("Enter your Link Here: ");
            document.execCommand(myEvent, false, url);
        }
        else if(myEvent === "formatBlock"){
            let formattingValue = button.dataset['block'];
            document.execCommand(myEvent, false, formattingValue);
        }
        else{
        document.execCommand(myEvent, false, null);
        }
    })
})


copy_html.addEventListener('click',()=>{
    navigator.clipboard.writeText(data_html.innerHTML);
})