var choice = document.querySelector("#choices");
var btn = document.querySelector("#btn");
var pick = document.querySelector(".pick");

choice.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        var l = document.createElement("span");
        l.appendChild(document.createTextNode(choice.value));
        pick.appendChild(l);
        choice.value = "";
    }
})

btn.addEventListener('click', function(){
    const times = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandom();

        highlight(randomTag);

        setTimeout(() => {
            unHighlight(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
         clearInterval(interval);

         setTimeout(() => {
             const randomTag = pickRandom();

             highlight(randomTag);
         }, 100);

     }, times * 100);
})

function pickRandom() {
    const tags = document.querySelectorAll('span');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag) {
    tag.classList.add('highlight');
}

function unHighlight(tag) {
    tag.classList.remove('highlight');
}