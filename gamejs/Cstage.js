function stageC() {

    let video;
    let szw;
    let szh;
    //pose
    let poseNet;
    let poses = [];
    let x1, y1;
    let x2, y2;
    let distance = -1; // ***
    let cx;
    let cy;
    //let shwoDistance;

    console.log('ml5 version:', ml5.version);

    this.enter = function () {
        //createCanvas( windowWidth, windowHeight);
        //background(220);
        //pose net  createCanvas(windowWidth, windowHeight);
        video = createCapture(VIDEO);
        video.size(320, 240); // half size
        video.hide();
        poseNet = ml5.poseNet(video, modelReady);
        poseNet.on("pose", function (results) {
            poses = results;
        });
        video.hide();
    }


    function modelReady() {
        select("#status").html("Model Loaded");
    }

    this.draw = function () {
        background(255);
        //image(video, 0, 0);

        //if pose is loaded, get distance!
        if (poses) {
            gotDistance();
        }

        // then call this function to calculate distance
        displayScenes();

        // also, play sound
        checkSound();
        showText();        
    }

    

    function displayAllPoints() {
        for (let i = 0; i < poses.length; i++) {
            // For each pose detected, loop through all the keypoints
            let pose = poses[i].pose;
            for (let j = 0; j < pose.keypoints.length; j++) {
                let keypoint = pose.keypoints[j]; // lefteye
                noStroke();
                fill(0, 255, 0);
                ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
            }
        }
    }

    // A function to draw ellipses over the detected keypoints
    function gotDistance() {
        if (poses.length > 0) {
            let pose = poses[0].pose;
            let leftEye = pose.keypoints[1]; // lefteye
            let rightEye = pose.keypoints[2]; // righteye

            if (leftEye.score > 0.2 && rightEye.score > 0.2) {
                let x1 = leftEye.position.x;
                let y1 = leftEye.position.y;
                let x2 = rightEye.position.x;
                let y2 = rightEye.position.y;
                cx = (x1 + x2) / 2;
                cy = (y1 + y2) / 2;
                let newDist = dist(x1, y1, x2, y2);
                distance = lerp(distance, newDist, 0.15); // lerp(currValue, targetValue, %);
                //visual 'distance' here
                //fill("#ffb0ea");
                //noStroke();
                //ellipse(cx,cy,d,d);
                //console.log(distance);
            }
        }
    }

    //checking the sound to make sure it play one track at once
    function checkSound() {
        isPlaying = false;
        for (let i = 0; i < mySounds.length; i++) {
            if (mySounds[i].isPlaying()) return true;
        }
    }

    //trigger different function depends on distance
    //seems like the 
    function displayScenes() {
        // userStartAudio();
        //console.log('im stage1')
        if (distance < 0) {
            // do nothing!
        } else if (distance < 40) {
            //console.log("this is far from screen " + d)
            drawStage1();
            if (!checkSound()) mySound1.play();
        } else if (distance < 50) {
            drawStage2();
            if (!checkSound()) mySound2.play();
            //this distance is not working 
            console.log('sound2?')
        } else if (distance < 70) {
            //console.log("this is n  " + d);
            drawStage3();
        } else if (distance < 80) {
            //console.log("this is   " + d);
            if (!checkSound()) mySound3.play();
            let volAmount = map(mouseX, height, 0, 0, 1);
            // console.log(volAmount);
            mySound3.setVolume(volAmount);
            drawStage4();
        } else if (distance < 90) {
            //console.log("this is nearest  " + d);
            drawStage5();
        // }else if (distance < 60) {
        //     //console.log("this is nearest  " + d);
        //     drawStage5();
        }
    }

    //if user get to the distance again
    // function drawStage00(){
    //     mgr.showScene(lastscene);
    // }
    //from far to close,different visual
    //start point: video
    function drawStage1() {
        //clear();
        background("black");
        console.log("im stage1");
        //
        // let wwnow = map(value, 0, ww, 0, windowWidth);
        // let whnow = ma
        image(video, 0, 0, windowWidth, windowHeight);
    }

    //glitch video
    function drawStage2() {
        const maxXChange = 125;
        const maxYChange = 5;
        const yNoiseChange = 0.01;
        const mouseYNoiseChange = 0.2;
        const timeNoiseChange = 0.013;
        var inverted = false;
        console.log("im stage2");
        for (let i = 0; i < video.height / 60; i++) {
            let y = floor(random(height));
            let h = floor(random(20, 30)); //floor(random(1, 100));
            let xChange = floor(
                map(
                    noise(
                        y * yNoiseChange,
                        (mouseY * mouseYNoiseChange + frameCount) * timeNoiseChange
                    ),
                    0.06,
                    0.94,
                    -maxXChange,
                    maxXChange
                )
            ); //floor(random(-maxXChange, maxXChange));
            let yChange = floor(
                xChange * (maxYChange / maxXChange) * random() > 0.1 ? -1 : 1
            );
            image(video, xChange - maxXChange, -maxYChange + y + yChange, window.width, h, 0, y, window.width, h);
        }
    }

    //pixels portrait // 
    function drawStage3() {
        console.log("im stage3");
        // let gridSize = int(map(d, 0,70, 15,50));
        let gridSize = 20;
        // the video has pixels just like an image!
        window.loadPixels();
        for (let y = 0; y < window.height; y += gridSize) {
            for (let x = 0; x < window.width; x += gridSize) {
                let index = (y * window.width + x) * 4;
                let r = window.pixels[index];
                // let dia = map(r, 0, 20, gridSize, 2);
                let dia = 20;
                fill(random(255));
                noStroke();
                circle(x + gridSize / 2, y + gridSize / 2, dia);
            }
        }
    }

    //rects
    function drawStage4() {
        console.log("im stage4");
        //distance is changing the w\h
        szw = map(distance, 0, 90, 1, 25);
        szh = map(distance, 0, 90, 1, 25);

        for (let y = 0; y < height; y += szh) {
            for (let x = 0; x < width; x += szw) {
                fill(random(distance * 3));
                rect(x, y, szw, szh);
            }
        }
    }

    //flash
    function drawStage5() {
        console.log("im stage5");
        fill(random(255));
        rect(0, 0, windowWidth, windowHeight);
        // //got error:let volAmount = map(d, height, 0, 0, 1);
        // let panAmount = map(mouseX, 0, width, -1, 1);
        // // console.log(panAmount);
    }

    function showText(){
       
        fill("black");
        rect(0,height/2,width,50);
         // display text
         push();
         //color stroke(174,31,35);
         //text font and size
         mTitle();
         text('You are',windowWidth / 2-250, windowHeight / 2)
         text(distance.toFixed(2),windowWidth / 2-100, windowHeight / 2)
         text('away from human',  windowWidth / 2+200, windowHeight / 2);
         //need to map and show the distance
         //shwoDistance = console(distance.toFixed(2));
         //let t1=map(value,0,showDistance,1.5,3.5);
     
         // text(distance.toFixed(2), windowWidth / 2, windowHeight / 2);
         //rect
         //rect(width / 2 - 400, height / 2 - 50, 600, 100);
         pop();  
    }

    function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
    }

}