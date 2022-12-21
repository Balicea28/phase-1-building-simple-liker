const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const arrayOfLikes = (
  Array.from(document.querySelectorAll('ul span'))
);

arrayOfLikes.forEach( (heartButton)=>{
    function likeFunction(){
      mimicServerCall()
      .then( () => {
        if(heartButton.innerText === EMPTY_HEART){
          heartButton.innerText = FULL_HEART;
          heartButton.className = 'like-glyph activate heart';
        }
        else if (heartButton.innerText === FULL_HEART){
          heartButton.innerText = EMPTY_HEART;
          heartButton.className = 'like-glyph';
        }
      }
      )
    }

}
)
.catch(() => {
  document.querySelector('#modal').className = ''
  document.querySelector('#modal').innerText = "Random server error. Try again."
  setTimeout(() => {document.querySelector('#modal').className = 'hidden'}, 3000)
  })
  heartButton.addEventListener('click', likeFunction);


function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


