function setup() {
  createCanvas(640, 600);
}


function PrintA(x, y) // PrintA(50, 80);
{
  /*
  line(50,80,80,20);
  line(110,80,80,20);
  line(70,65,90,65);
  */
  line(x,y,x+30,y-60);
  line(x+60,y,x+30,y-60);
  line(x+20,y-15,x+40,y-15);
}

function PrintB(x, y) // PrintB(130, 80);
{
/*
	noFill();
	line(130,80,130,20);
	noFill();
	beginShape();
	curveVertex(-89, 20);
	curveVertex(138, 80);
	curveVertex(138, 50);
	curveVertex(-84,100);
	endShape();
	beginShape();
	curveVertex(-110, 2);
	curveVertex(138, 50);
	curveVertex(138, 20);
	curveVertex(-10,100);
	endShape();
*/

	noFill();
	line(x,y,x,y-60);
	noFill();
	beginShape();
	curveVertex(x-219, y-60);
	curveVertex(x+8, y);
	curveVertex(x+8, y-30);
	curveVertex(x-214,y+20);
	endShape();
	beginShape();
	curveVertex(x-240, y-78);
	curveVertex(x+8, y-30);
	curveVertex(x+8, y-60);
	curveVertex(x-140,y+20);
	endShape();
}


function PrintC(x, y, h, w) // PrintC(215, 50, 60, 60);
{
/*
	arc(215, 50, 60, 60,-17.7,-20, PI + TWO_PI);
*/
	arc(x, y, h, w,-17.7,-20, PI + TWO_PI);
}

function PrintD(x,y) // PrintD(246,80);
{
/*
	line(246,80,246,20);
	beginShape();
	curveVertex(-110,10);
	curveVertex(255, 80);
	curveVertex(255, 20);
	curveVertex(-10,150);
	endShape();
*/
	line(x,y,x,y-60);
	beginShape();
	curveVertex(x-356,y-70);
	curveVertex(x+9, y);
	curveVertex(x+9, y-60);
	curveVertex(x-256,y+70);
	endShape();
}

function PrintE(x,y,h,w) // PrintE(340, 50, 60, 60);
{
/*
  arc(340, 50, 60, 60,-17.7,-20, PI + TWO_PI);
  line(320,50,350,50);
*/
  arc(x, y, h, w,-17.7,-20, PI + TWO_PI);
  line(x-20,y,x+10,y);
}

function PrintF(x, y) // PrintF(375,80);
{
/*
  line(375,80,375,20);
  line(385,20,410,20);
  line(385,50,410,50);
*/
  line(x,y,x,y-60);
  line(x+10,y-60,x+35,y-60);
  line(x+10,y-30,x+35,y-30);
}


function PrintG(x, y, h, w) // PrintG(457, 50, 60, 60);
{
/*
  arc(457, 50, 60, 60,-12.55,-20, OPEN);
  line(450,50,485,50);
*/
  arc(x, y, h, w,-12.55,-20, OPEN);
  line(x-7,y,x+28,y);
}

function PrintH(x, y) // PrintH(500, 80);
{
/*
  line(500,80,500,20);
  line(545,80,545,20);
  line(510,50,535,50);
*/
  line(x,y,x,y-60);
  line(x+45,y,x+45,y-60);
  line(x+10,y-30,x+35,y-30);
}

function PrintI(x,y) // PrintI(50,100);
{
  /*
  line(50,100,50,160);
  */
  line(x,y,x,y+60);
}

function PrintJ(x, y)  // PrintJ(-110, 100);
{
/*
	beginShape();
	curveVertex(-110,100);
	curveVertex(80, 160);
	curveVertex(80, 100);
	curveVertex(-110,150);
	endShape();
*/

	beginShape();
	curveVertex(x,y);
	curveVertex(x+190, y+60);
	curveVertex(x+190, y);
	curveVertex(x,y+50);
	endShape();	
}

function PrintK(x, y) // PrintK(130,100);
{
/*
  line(130,100,130,160);
  line(130,120,167,160);
  line(142,120,165,100);
*/
  line(x,y,x,y+60);
  line(x,y+20,x+37,y+60);
  line(x+12,y+20,x+35,y);
}

function PrintL(x, y) // PrintL(190,100);
{
/*
  line(190,100,190,160);
  line(200,160,225,160);
*/
 line(x,y,x,y+60);
  line(x+10,y+60,x+35,y+60);
}

function PrintM(x, y) // PrintM(245,100);
{
/*
  line(245,100,245,160);
  line(295,100,295,160);
  line(245,110,266,130);
  line(295,110,274,130);
*/

  line(x,y,x,y+60);
  line(x+50,y,x+50,y+60);
  line(x,y+10,x+21,y+30);
  line(x+50,y+10,x+29,y+30);

}

function PrintN(x,y)   // PrintN(320,100);
{
/*
  line(320,100,320,160);
  line(365,100,365,160);
  line(320,110,349,138);
*/
  line(x,y,x,y+60);
  line(x+45,y,x+45,y+60);
  line(x,y+10,x+29,y+38);
}

function PrintO(x,y,h,w) // PrintO(414, 130, 63, 63);
{
  /*
  ellipse(414, 130, 63, 63);
  */
  ellipse(x,y,h,w);
}


function PrintP(x,y,h,w) // PrintP(462,100,25,25);
{
 /*
  line(462,100,462,145);
  arc(472, 112, 25, 25, -1.75, 1.75 , OPEN);
 */
 
  line(x,y,x,y+52);
  arc(x+10, y+12, h, w, -1.75, 1.75 , OPEN);
}

function PrintQ(x,y,h,w) // PrintQ(533, 130, 63, 63);
{
  /*
  ellipse(533, 130, 63, 63);
  line(545,140,563,160);
  */
  ellipse(x, y, h, w);
  line(x+12,y+10,x+30,y+30);
}

function PrintRVer1(x, y, h, w) // PrintRVer1(50,180,28,28);
{
  /*
  line(50,180,50,240);
  arc(65, 192, 28, 28,16.8,-11.0, OPEN);
  line(60,205,90,240);
  */
  
  line(x,y,x,y+60);
  arc(x+15, y+12, h, w,16.8,-11.0, OPEN);
  line(x+10,y+25,x+40,y+60);
}

function PrintRVer2(x, y, h, w)  //PrintRVer2(50,280,20,23);
{
  /*
  line(50,280,50,340);
  arc(62, 290, 20, 23,16.80,-11.25, OPEN);
  line(60,305,90,340);
  */
  
  line(x,y,x,y+60);
  arc(x+12, y+10, h, w,16.80,-11.25, OPEN);
  line(x+10,y+25,x+40,y+60);
}

function PrintS(x,y,h,w) // PrintS(105,210,58,58);
{
  /*
  line(105,210,158,210);
  noFill();
  arc(132, 210, 58, 58, 3.30, -0.42 , OPEN);
  arc(132, 210, 58, 58, 0.10, 2.70 , OPEN);
  */
  line(x+5,y+5,x+55,y+5);
  noFill();
  arc(x+30, y, h, w, 3.05, -0.42 , OPEN);
  arc(x+30, y+8, h, w, -0.05, 2.70 , OPEN);
}

function PrintT(x,y)  // PrintT(193,190);
{
/*
  line(193,190,193,240);
  line(176,181.5,209,181.5);
*/

  line(x,y,x,y+50);
  line(x-17,x-11.5,x+16,y-8.5);
}

function PrintU(x,y,h,w) // PrintU(132,110,58,58);
{
  /*
  noFill();
  arc(132, 110, 58, 58, -0.70, 3.80 , OPEN);
  */
  noFill();
  arc(x, y, h, w, -0.70, 3.80 , OPEN);
  //ellipse(252,210, 63, 63);
}

function PrintV(x, y) // PrintV(292,180);
{
/*
  line(292,180,317,240);
  line(342,180,317,240);
*/
  line(x,y,x+25,y+60);
  line(x+50,y,x+25,y+60);
}

function PrintW(x, y) // PrintW(360, 180);
{
/*
  line(360,180,360,240);
  line(410,180,410,240);
  line(360,240,380.5,220);
  line(410,240,389.5,220);
*/

  line(x,y,x,y+60);
  line(x+50,y,x+50,y+60);
  line(x,y+60,x+20.5,y+40);
  line(x+50,y+60,x+29.5,y+40);

}

function PrintX(x, y) // PrintX(425, 180);
{
/*
  line(425,180,443,203);
  line(425,240,470,180);
  line(473,240,454,215);
*/
  line(425,180,443,203);
  line(425,240,470,180);
  line(473,240,454,215);
}

function PrintY(x,y) // PrintY(488, 240);
{
/*
  line(488,240,530,180);
  line(485,180,504,202);
*/

  line(x,y,x+42,y-60);
  line(x-3,y-60,x+16,y-38);

}

function PrintZ(x,y)  // PrintZ(543, 240);
{   /*
	line(543,240,587,180);
	line(576.5,180,544,180);
	line(553,240,587,240);
	*/
	line(x,y,x+44,y-60);
	line(x+33.5,y-60,x+1,y-60);
	line(x+10,y,587,y);
}

function draw()
{
	background(0);

	stroke('rgba(100%,0%,100%,1)');
	strokeWeight(6);

	PrintA(50, 80);
	PrintB(130, 80);
	PrintC(215, 50, 60, 60);
	PrintD(246,80);
	PrintE(340, 50, 60, 60);
	PrintF(375,80);
	PrintG(457, 50, 60, 60);
	PrintH(500, 80);
	PrintI(50,100);
	PrintJ(-110, 100);
	PrintK(130,100);
	PrintL(190,100);
	PrintM(245,100);
	PrintN(320,100);
	PrintO(414, 130, 63, 63);
	PrintP(462,105,32,32);
	PrintQ(533, 130, 63, 63);
	PrintRVer1(50,180,28,28);
	//PrintRVer2(50,280,20,23);
	PrintS(105,205,58,58);
	PrintT(193,190);
	PrintU(250,200, 56, 78);
	PrintV(292,180);
	PrintW(360, 180);
	PrintX(425, 180);
	PrintY(488, 240);
	PrintZ(543, 240);
  
    PrintH(50, 380);
    PrintE(140, 350, 60, 60);
    PrintL(170,320);
    PrintL(220,320);
    PrintO(286, 350, 63, 63);
  
    PrintH(50, 470);
    PrintO(140, 440, 63, 63);
    PrintW(182, 410);
  
    PrintA(265, 470);
    PrintRVer1(335,410,28,28);
    PrintE(407, 440, 60, 60);
  
    PrintY(455, 470);
    PrintO(530, 440, 63, 63);
    PrintU(600,430, 56, 78);
  
  
  
}

