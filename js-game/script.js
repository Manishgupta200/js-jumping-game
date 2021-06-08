var character=document.getElementById('character');
var block=document.getElementById('block');
function jumping(){
    character.classList.add('jump');
    setTimeout(function (){
        character.classList.remove('jump');
    },500)
}
function travel(){
    var b=block.classList.add('translate');
}

var checkDead=setInterval(function (){
    var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation='none';
        block.style.display='none';
        var a=confirm('U LOSE');
        window.location.reload(true);
    }
    
});