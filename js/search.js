const searchBar=document.getElementById('search').children[0];
const searchBtn=document.getElementById('search').children[1];
const filmImg=document.getElementsByTagName('img');

function search(){
    let input=searchBar.value.toLowerCase();
    if(input==''){
        if(state[0][1]==1)
        {
            state[0][1]=0;
            clickAll();
        }
        else{
            for(i=1;i<state.length;i++){
                if(state[i][1]==1){
                    activate(state[i][0]);
                }
            }
        }
    }
    else{
        for(let i=1;i<state.length;i++){
            deactivate(state[i][0]);
        }
        for(let i=1;i<state.length;i++){
            if(state[i][1]==1 || state[0][1]==1){
                let titleName=document.getElementsByClassName(state[i][0])[0].innerHTML.toLowerCase();
                if(titleName.includes(input)){   
                    activate(state[i][0]);
                    console.log(titleName);
                }
                for(let j=2;j<5;j++){
                    let filmName=document.getElementsByClassName(state[i][0])[j].getAttribute('id').toLowerCase();
                    if(filmName.includes(input)){
                        document.getElementsByClassName(state[i][0])[0].style.display='block';
                        document.getElementsByClassName(state[i][0])[1].style.display='flex';
                        document.getElementsByClassName(state[i][0])[j].style.display='block';
                        console.log(filmName);
                    }
                }
            }
        }
    }
}

searchBar.addEventListener('input',search);
searchBtn.addEventListener('click',search);