const state=[['all',1],['space',0],['tech',0],['time',0],['parallel',0],['alien',0],['soon',0]];
const dropContent=document.getElementById('dropcontent');
const allFilterLinks=dropContent.getElementsByTagName('a');
const main=document.getElementById('maincontainer');
activateBtn(state[0][0]);

let isOpen=false;
function filterDropbar(){
    if(isOpen==true){
        dropContent.style.display='none';
        isOpen=false;
    }
    else{
        dropContent.style.display='block';
        isOpen=true;
    }
}
function clickAll(){
    if(state[0][1]==0){
        for(let i=1;i<state.length;i++){
            deactivateBtn(state[i][0]);
            state[i][1]=0;
        }
        for(let i=1;i<state.length;i++){
            activate(state[i][0]);
        }
        state[0][1]=1;
        activateBtn(state[0][0]);
    }
    else{
        for(let i=0;i<main.children.length;i++){
            main.children[i].style.display='none';
        }
        deactivateBtn(state[0][0]);
        state[0][1]=0;
    }
}
function clickState(){
    if(state[0][1]==1){
        for(let i=0;i<main.children.length;i++){
            main.children[i].style.display='none';
        }
        deactivateBtn(state[0][0]);
        state[0][1]=0;
    }
   for(let i=1;i<state.length;i++){
        if(state[i][0]==event.target.id){
            if(state[i][1]==0){
                state[i][1]=1;
                activateBtn(state[i][0]);
                activate(state[i][0]);
                console.log('act');
            }
            else{
                state[i][1]=0;
                deactivateBtn(state[i][0]);
                deactivate(state[i][0]);
                console.log('deact');
            }
        }
   }

}
function activateBtn(id){
    document.getElementById(id).style.backgroundColor='rgb(88, 86, 86)';
    document.getElementById(id).style.color='aliceblue';

}
function deactivateBtn(id){
    document.getElementById(id).style.backgroundColor='antiquewhite';
    document.getElementById(id).style.color='rgb(17, 17, 41)';
}
function activate(id){
    document.getElementsByClassName(id)[0].style.display='block';
    document.getElementsByClassName(id)[1].style.display='flex';
    document.getElementsByClassName(id)[2].style.display='block';
    document.getElementsByClassName(id)[3].style.display='block';
    document.getElementsByClassName(id)[4].style.display='block';
}
function deactivate(id){
    document.getElementsByClassName(id)[0].style.display='none';
    document.getElementsByClassName(id)[1].style.display='none';
    document.getElementsByClassName(id)[2].style.display='none';
    document.getElementsByClassName(id)[3].style.display='none';
    document.getElementsByClassName(id)[4].style.display='none';
}

document.getElementById('filter').addEventListener("click", filterDropbar);

document.getElementById('all').addEventListener("click", clickAll);

Array.from(allFilterLinks).forEach((arr) => {
    console.log(arr.getAttribute('id'));
    let anchor=arr.getAttribute('id');
    if(anchor!='all') {
        document.getElementById(anchor).addEventListener("click", clickState);
    }
});