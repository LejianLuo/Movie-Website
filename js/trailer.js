//<iframe width="853" height="480" src="https://www.youtube.com/embed/1Ykbdi94frI" 
//title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
//clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
const videoId=[['EdensZero','https://www.youtube.com/embed/1Ykbdi94frI'],
['FinalSpace','https://www.youtube.com/embed/4EHbt_kSkG8'],
['CowboyBebop','https://www.youtube.com/embed/OhNwckCLzis'],
['LoveDeath','https://www.youtube.com/embed/Xj2b0swdpX8'],
['GhostShell-Anime','https://www.youtube.com/embed/oP2Pt6m3yKU'],
['BigHero','https://www.youtube.com/embed/z3biFxZIJOQ'],
['Futurama','https://www.youtube.com/embed/ZZscQfND_jg'],
['GirlLept','https://www.youtube.com/embed/eWnTeKEsDlU'],
['YourName','https://www.youtube.com/embed/o4-URMnBOPU'],
['RickMorty','https://www.youtube.com/embed/hl1U0bxTHbY'],
['Spiderman-Anime','https://www.youtube.com/embed/g4Hbz2jLxvQ'],
['SteinsGate','https://www.youtube.com/embed/uMYhjVwp0Fk'],
['SolarOpposites','https://www.youtube.com/embed/_6W-XD9kswc'],
['StarButterfly','https://www.youtube.com/embed/QMH4zyQ22Mo'],
['ScarletNexus','https://www.youtube.com/embed/k1kI09X8L9Y'],
['Farzar','https://www.youtube.com/embed/F1r6IDby3IE'],
['Spriggan','https://www.youtube.com/embed/IZJMihZ8ujg'],
['Bubble','https://www.youtube.com/embed/8pbWblLkHHk'],

['Interstellar','https://www.youtube.com/embed/zSWdZVtXT7E'],
['Martian','https://www.youtube.com/embed/ej3ioOneTy8'],
['Odyssey2001','https://www.youtube.com/embed/L7y3ecnnBRg'],
['MinorityReport','https://www.youtube.com/embed/aGWQYgZZEEQ'],
['AI','https://www.youtube.com/embed/_19pRsZRiz4'],
['Tenet','https://www.youtube.com/embed/L3pk_TBkihU'],
['AdamProject','https://www.youtube.com/embed/IE8HIsIrq4o'],
['BackToFuture','https://www.youtube.com/embed/qvsgGtivCgs'],
['Everything','https://www.youtube.com/embed/wxN1T1uxQ2g'],
['DoctorStrange','https://www.youtube.com/embed/aWzlQ2N6qqg'],
['BlackAdam','https://www.youtube.com/embed/X0tOpBuYasI'],
['Arrival','https://www.youtube.com/embed/tFMo3UJ4B4g'],
['Avatar','https://www.youtube.com/embed/5PSNL1qE6VY'],
['IndependenceDay','https://www.youtube.com/embed/B1E7h3SeMDk'],
['Rubikon','https://www.youtube.com/embed/kw4m5XNyiQU'],
['Moonfall','https://www.youtube.com/embed/ivIwdQBlS10'],
['Spiderman-Movie','https://www.youtube.com/embed/JfVOs4VSpmA'],
['GhostShell-Movie','https://www.youtube.com/embed/vctm5VD7qKQ'],

['Orville','https://www.youtube.com/embed/Ej24W8gcmXQ'],
['TheExpanse','https://www.youtube.com/embed/kQuTAPWJxNo'],
['StarTrek','https://www.youtube.com/embed/XL4iCAB6MFo'],
['BlackMirror','https://www.youtube.com/embed/-qIlCo9yqpY'],
['MadeForLove','https://www.youtube.com/embed/lvWgNSLIULw'],
['Humans','https://www.youtube.com/embed/BV8qFeZxZPE'],
['TheWife','https://www.youtube.com/embed/3_8WZxHScMk'],
['Timeless','https://www.youtube.com/embed/WXTjc41Tj_I'],
['FutureMan','https://www.youtube.com/embed/nC42PXc4444'],
['Fringe','https://www.youtube.com/embed/29bSzbqZ3xE'],
['StrangeThings','https://www.youtube.com/embed/mnd7sFt5c3A'],
['Zapped','https://www.youtube.com/embed/CuMtzyA0dXU'],
['DoctorWho','https://www.youtube.com/embed/PiV8PfupbjY'],
['ResidentAlien','https://www.youtube.com/embed/T4J7QjGNTs4'],
['Halo','https://www.youtube.com/embed/5KZ3MKraNKY'],
['TheThreebodyProblem','https://www.youtube.com/embed/qqK2oDPzfx4'],
['PaperGirls','https://www.youtube.com/embed/lDz0ioCV1TU'],
['TheImperfects','https://www.youtube.com/embed/aEs2ziTArdk']
]

const utube=document.createElement('iframe');
const close=document.getElementById('close');
const start=document.getElementById('start');
const title=document.getElementById('maintitle');
const dropbar=document.getElementById('dropbar');
const video=document.getElementById('headvideo');
const allTrailerLinks=document.getElementsByClassName('link');

function matchVideoId(id){
    for(let i=0;i<videoId.length;i++){
        if(videoId[i][0]==id){
            console.log(videoId[i][1]);
            return videoId[i][1];
        }
    }
}
function displayTrailer(){
    //set video attributes
    utube.setAttribute('width','853');
    utube.setAttribute('height','480');
    utube.setAttribute('src',matchVideoId(event.target.id));
    utube.setAttribute('title','YouTube video player');
    utube.setAttribute('frameborder','0');
    utube.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    utube.setAttribute('allowfullscreen','');
    //set close button attributes
    close.style.display='block';
    title.style.display='none';
    start.style.display='none';
    dropbar.style.display='none';
    video.insertBefore(utube,close);
    console.log(event.target.id);

}
function removeTrailer(){
    video.removeChild(video.children[0]);
    close.style.display='none';
    title.style.display='block';
    start.style.display='inline-block';
    dropbar.style.display='block';
}

close.addEventListener("click", removeTrailer);

Array.from(allTrailerLinks).forEach((arr) => {
    console.log(arr.getElementsByTagName('a')[1].getAttribute('id'));
    let anchor=arr.getElementsByTagName('a')[1].getAttribute('id');
    document.getElementById(anchor).addEventListener("click", displayTrailer);
});