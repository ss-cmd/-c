
function stageA() {
    const phrases = ['Hello stranger.','Put on your headphone please.']
    let i = 0
    let j = 0
    let currentPhrase = []
    let isDeleting = false
    let isEnd = false
    let fr = 10;
  
    this.enter = function () {
      mySound10.play();
      mySound9.loop();
      setTimeout(showcount, 25000);
    }
  
    this.draw = function () {
      // background('#FE5600');
      background('black');
      isEnd = false
      frameRate(fr);
      // typeWriter();
  
      if (i < phrases.length) {
  
        if (!isDeleting && j <= phrases[i].length) {
          currentPhrase.push(phrases[i][j])
          j++
          typeWriter();
        }
  
        if (isDeleting && j <= phrases[i].length) {
          currentPhrase.pop(phrases[i][j])
          j--
          typeWriter();
  
        }
  
        if (j == phrases[i].length) {
          isEnd = true
          isDeleting = true
        }
  
        if (isDeleting && j === 0) {
          currentPhrase = []
          isDeleting = false
          i++
          if (i === phrases.length) {
            i = 0
          }
        }
      }
  
        const spedUp = Math.random() * (80 - 50) + 50
        const normalSpeed = Math.random() * (300 - 200) + 200
        const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
        setTimeout(typeWriter, 2000)
        //console.log(time);
  
    }
  
    function typeWriter() {
      textSize(30);
      fill("white");
      text(currentPhrase.join(''), windowWidth  / 2 - 250, windowHeight / 2);
      //text("WARNING", windowWidth / 2 - 100, windowHeight / 2-100);
      textSize(50);
      //text('The following content may cause you to feel uncomfortable at moments.' , windowWidth / 2 - 450, windowHeight / 2);
      //text('In this room promise you will only look forward.' , windowWidth / 2 - 350, windowHeight / 2+50);
      //console.log(width / 2 - 200);
    }
  
    function showcount() {
      mySound10.stop();
      mySound9.stop();
      clear();
      mgr.showScene(warning);
      console.log('01stage ends');
    }
  }
  
  
  
  