function stageB() {
    let lineW = width;
    let lineH = height;
    fr = 10;
    let lineGo1 = (width / fr / 12) * 6;
    let lineGo2 = (height / fr / 12) * 6;

    // let instructText = ['mood checking', 'Look at the screen.', 'Stare at the blinking rect', 'Hold on for 5 seconds.', '5', '4', '3', '2', '1','Done', 'Go to the next position'];
    let instructText = ['Hold on for 5 seconds.', '5', '4', '3', '2', '1', 'Done', 'Enjoy the your time'];
    let instructNum = 0;

    let intructInt = setInterval(switchInstruct, 1000);
    setTimeout(showNext, 12000);

    // cx;
    // cy;

    w = 0,
    h = 0;

    this.enter = function () {
        //32s
        setTimeout(playSound,1500);
        setTimeout(showNext, 10000);
    }

    
    this.draw = function () {
        clear();
        background('white');
        //console.log('check');
        //image(video, 0, 0, windowWidth, windowHeight);
        // nofill();

        //4 lines and rect
        stroke('black');
        strokeWeight(3);
        line(width / 2 - lineW / 2, height / 2 + 50, width / 2 + lineW / 2, height / 2 + 50);
        line(width / 2 - lineW / 2, height / 2 - 50, width / 2 + lineW / 2, height / 2 - 50);
        line(width / 2 - 200, height / 2 + lineH / 2, width / 2 - 200, height / 2 - lineH / 2);
        line(width / 2 + 200, height / 2 - lineH / 2, width / 2 + 200, height / 2 + lineH / 2);
        push();
        rect(width / 2 - 200, height / 2 - 50, 400, 100);
        pop();

        push();
        strokeWeight(1);
        mTitle();
        fill('black');
        text(instructText[instructNum], width / 2, height / 2-30);
        pop();

        lineW -= lineGo1;
        lineH -= lineGo2;
        if (lineW <= 0) {
            lineW = 0;
        }
        if (lineH <= 0) {
            lineH = 0;
        }

    }
    function playSound(){
        mySound6.play()
    }
    function switchInstruct() {
        instructNum++;
        if (instructNum > 9) {
            instructNum = 9;
        }
    }

    function showNext() {
        //console.log('end');
        clearInterval(intructInt);
        // if (width / 2 + 200>cx > width / 2 - 200 ||  height / 2 - 50<cy < height / 2 + 50) {
        mgr.showScene(stageC);
        //console.log('end2');
        //     }
    }
}