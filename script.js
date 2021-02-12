
const memesRes = document.getElementById('memes_result');


let i=0;

function searchMemes(){
  fetch(`https://api.imgflip.com/get_memes`)

   
    .then(res =>res.json())
    .then(red=>{

      console.log(red);
          
           memesRes.innerHTML = `<img src=${red.data.memes[i].url} alt="Memes" />`;
           i++;
          
    });
    
}





