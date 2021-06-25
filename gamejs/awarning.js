
function warning() {
    // //for machine learing,reading the img of headphone
    // const phrases = ['Hello stranger.','Put your headphone please.']
    // let i = 0
    // let j = 0
    // let currentPhrase = []
    // let isDeleting = false
    // let isEnd = false
    // let fr = 10;
  
    this.enter = function () {
      setTimeout(showNext, 12000);
      mySound7.play();
    }
  
    this.draw = function () {
      // background('#FE5600');
      background('black');
      isEnd = false
      typeWriter();
        //console.log(time);
  
    }
  
    function typeWriter() {
      textSize(30);
      //text(currentPhrase.join(''), windowWidth  / 2 - 250, windowHeight / 2+200);
      text("WARNING", windowWidth / 2 - 100, windowHeight / 2-100);
      textSize(25);
      text('The following content may cause you to feel uncomfortable at moments.' , windowWidth / 2 - 450, windowHeight / 2);
      text('In this room promise you will only look forward.' , windowWidth / 2 - 350, windowHeight / 2+50);
      //console.log(width / 2 - 200);
    }
  
    function showNext() {
      // mySound10.stop();
      // mySound9.stop();
      mySound7.stop();
      mgr.showScene(stageB);
      console.log('01stage ends');
    }
  }
  
  