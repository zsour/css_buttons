let spans = document.getElementById('buttonTen').querySelectorAll('span');

function init(){
    for(let i = 0; i < spans.length; i++){
        spans[i].style.left = `${i*25}%`;
        spans[i].style.top = "-100%";
    }
}

function rePosition(){
    setTimeout(() => {
        for(let i = 0; i < spans.length; i++){
            spans[i].style.left = `${i*25}%`;
            spans[i].style.top = "-100%";
            spans[i].style.opacity = `0`;
        }
    }, 800);
}

function dropOne(span){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            span.style.top = "0%";
            span.style.opacity = `1`;
            resolve();
        },200);
    });
}


async function fall(){
    for(let i = 0; i < spans.length; i++){
        if(i === 0){
            spans[i].style.top = "0%";
            spans[i].style.opacity = `1`;
            continue;
        }
      
        await dropOne(spans[i]);
      
    }
}

init();