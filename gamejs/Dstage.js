function lastscene() {
    console.log('i am trigger')

    this.enter = function () {
      mySound8.play();
      showNext();
    }
    this.draw = function () {
      background('black');
      mTile();
      text('Never stop performing the bonds that connect us together',width/2-100,height/2);
      text('Now your conversation begin',width/2-100,height/2-50);
    }
    function showNext(){
      mgr.showScene(stageC);
    }

}