

//-  Jogo educativo utilizando o p5 JS //- 

//- Falta atualizar //- 



//--------------------------------------------------------------//  
              // Objetos caindo // objetos caindo //

              let objetos = [];

              let objetoX = 200;
              let objetoY = 100;
              
              let objetoX1 = 100;
              let objetoY1 = 100;
              
              
              let objetoX2 = 300;
              let objetoY2 = 100;
              
              let objetoX3 = 400;
              let objetoY3 = 100;
              
              let objetoSize = 20;
              let objetoVel = 3;
              
              
              function preload(){
                imag1 = loadImage("Menu.jpg");
                imag2 = loadImage("Fase1.png");
                imag3 = loadImage("Fase2.png");
                imag4 = loadImage("Fase3.png");
                maca = loadImage("ma.png")
                ha = loadImage("ha.png")
                personagem = loadImage("pn.com.png")
              }
              
              
              
              
              function setup() {
                createCanvas(500, 500);
                frameRate(fr)
              } 
              
              
              //--------------------------------------------------------------//   
                         // Menu jogar, instruções, créditos, sobre //
              
              function draw() {
                noStroke();
                textStyle(BOLD);
                background(0, 255, 0);
                image(imag1, 0,0, 500, 500);
                
                
                qtddraw++;
                if(qtddraw == fr){
                  qtddraw = 0
                  
                }
              
              
              //--------------------------------------------------------------//   
                             // Nome do jogo // HEALTH GAME // 
              
                if(tela === 0) { 
                  
                vida = 3
                ponto = 0
                textSize(24);
                textAlign(CENTER);
                fill(204, 204, 255); 
                text("HEALTH GAME", 250, 60);
              
              
              //--------------------------------------------------------------//     
                          // Menu jogar // menu jogar // 
                
                if(mouseX > 120 && mouseX < 370 && mouseY > 90 && mouseY < 140){
                   fill(255, 255, 0);
                }
                else {
                  fill(255, 255, 255);
                }
              
                rect(120, 90, 250, 50, 15);
                fill(0, 0, 0);
                textSize(24);
                textAlign(CENTER);
                text("Jogar", 245, 123);
                
              //--------------------------------------------------------------//    
                             // Instruções // instruções //
                
                  if (mouseX > 120 && mouseX < 370 && mouseY > 160 && mouseY < 210){
                   fill(255, 255, 0);
                }
                else {
                  fill(255, 255, 255);
                }
                
                rect(120, 160, 250, 50, 15);
                fill(0, 0, 0);
                textSize(24);
                textAlign(CENTER);
                text("Instruções", 250, 192);
                
              
              
              //---------------------------------------------------------------------//
                                     // Créditos // créditos //
                
                if (mouseX > 120 && mouseX < 370 && mouseY > 230 && mouseY < 280){
                   fill(255, 255, 0);
                }
                else {
                  fill(255, 255, 255);
                }
                rect(120, 230, 250, 50, 15);
                fill(0, 0, 0);
                textSize(24);
                textAlign(CENTER);
                text("Créditos", 250, 264);
                  
              
              //--------------------------------------------------------------//
                          // Clicou em Jogar // clicou em Jogar
                
               }  if(tela === 1) {
                   background(0, 134, 179);
                   image(imag2, 0,0,500,500);
                   textSize(15);
                   fill(0, 0, 102);
                   text("Seja bem-vindo ao jogo!", 250, 43);
                   fill(0,0,255)
                   textSize(17);
                   text("Pontos: ", 48, 30)
                   text(pontos, 87, 30)
                   fill(255, 0, 0)
                   text("Vida: ", 440, 30)
                   text(vida, 467, 30)
                   textSize(15);
                   fill(255, 255, 255);
                   rect(16, 455, 80, 25, 15);
                   fill(255, 0, 0);
                   text("Voltar", 55, 473);
                
                 
                 
                 
              //--------------------------------------------------------------//      
                   // Função do mouse, direta e esquerda do personagem //
                 
                  
                 
                 if (keyIsDown(LEFT_ARROW)) {
                    if  (personagemX  > 0 ){
                      personagemX -= personagemVel;
                      
                    }
                  }
                 if (keyIsDown(RIGHT_ARROW)) {
                    if  (personagemX < 455) {
                      personagemX += personagemVel;
                      
                    }
                 }
                 
              //--------------------------------------------------------------//      
                          // Retângulo azul // retângulo vermelho //
                 image(personagem, personagemX, personagemY, 50, 50);
                 image(hamburguer,objetoX,objetoY,40,40)
                 push()
                 fill(0,0,255)
                 image(maca,objetoX1,objetoY1, 70, 70)
                 pop()
                 
              //-------------------------------------------------------------//
                                // Colisão dos retângulos // 
                 
                 if(dist(personagemX,personagemY, objetoX, objetoY) < 35){
                   objetoY = 10
                   objetoX = random(350);
                   vida -= 1
                   
                 }
                 if(dist(personagemX,personagemY, objetoX1, objetoY1) < 40){
                   objetoY1 = 10
                   objetoX1 = random(350);
                   pontos += 1
                   
                 }
                 
              //-------------------------------------------------------------//
                                 // Queda dos retângulos // 
                 
                 if(objetoY < 500){
                   objetoY += objetoVel + 2;
                 }
                 if(objetoY1 < 500){
                   objetoY1 += objetoVel;
                   
                 }
                 if(objetoY1 >= 500){
                   objetoY1 = 10;
                   objetoX1 = Math.random()*350;
                   
                 }
                 if(objetoY >= 500){
                   objetoY = 10;
                   objetoX = Math.random()*350;
                 }
                 
                 
              //--------------------------------------------------------------//  
                       // Tela Game Over quando acabar as vidas //
                 
                  if(vida == 0){
                   tela = 4
                   
                  
                 }
              //--------------------------------------------------------------//     
                               // Tela do próximo nível //
                 
                 if(pontos == 10){
                   tela = 5
                 }
                 
                 
                 
              //--------------------------------------------------------------//
                      // Clicou em Intruções // clicou em Intruções //
                 
              }
                else if(tela === 2) {
                    background(0, 136, 204)
                    fill(250);
                    rect(15,60,470,387,18);
                    textStyle(BOLD);
                    textSize(20);
                    fill(250);
                    textAlign(LEFT);
                    text('INSTRUÇÕES',182, 52);
                    fill(255, 0, 0);
                    textSize(17);
                    text('Como funciona:',190,80);
                    fill(25, 0, 0);
                    text('O jogo possuí três fases: fácil, médio e avançado, a finalidade desse desafio é passar de fase, recolhendo  os alimentos saudáveis.',25, 90, 460,180); 
                    text('Use as setas do teclado para movimentar o personagem e coletar os alimentos saudáveis.',25, 220, 465,180); 
                    textSize(15);
                    fill(255, 255, 255);
                    rect(16, 455,80, 25,15);
                    fill(255, 0, 0);
                    textAlign(CENTER);
                    text("Voltar", 55, 473);
              
                }  
                   
                  
              //--------------------------------------------------------------//    
                      // Clicou em créditos // clicou em créditos //
                  
               else if (tela === 3 ) {  
                    background(0, 51, 204);                
                    fill(250);
                    rect(15,60,470,387,18);
                    textStyle(BOLD);
                    textSize(20);
                    fill(250);
                    text('CRÉDITOS',250,52);
                    fill(0);
                    textSize(17);
                    fill(255, 0, 0);
                    text('UF:',250,76)
                    fill(0);
                    text('Aluno:',90, 92)
                    text('P',247,92); 
                    textSize(15);
                    fill(255, 0, 0)
                    text('E-mail:',250,157)
                    fill(0);
                    textSize(14);
                    text('r@hotmail.com',230,175);
                    fill(255, 0, 0);
                    text('Biblioteca:',250,240)
                    textSize(15);
                    fill(0);
                    text("Voltar", 55, 473);
                
               
              
                }
                    
              //--------------------------------------------------------------//    
                      // Tela Game Over quando acabar as vidas   //
                
                 if(tela === 4) { 
                   background(0, 0, 0);
                   textSize(40);
                   fill(0, 255, 0);
                   text("Game Over!", 250, 100);
                   textSize(20);
                   fill(255, 0, 0);
                   text("Tente outra vez!", 250, 140);
                   fill(0,0,255)
                   textSize(18);
                   fill(77, 121, 255)
                   text("Pontos: ", 48, 30)  
                   text(pontos, 87, 30)
                   fill(255,0,0)
                   text("Vida: ", 440, 30)
                   text(vida, 467, 30)
                   textSize(15);
                   fill(255, 255, 255);
                   rect(16, 455, 80, 25, 15);
                   fill(255, 0, 0);
                   text("Voltar", 55, 473);
                   
                 }  
                
              //--------------------------------------------------------------//     
                               // Tela do próximo nível //  
                
               if(tela === 5) { 
                   background(0, 0, 0);
                   image(imag3, 0,0,500,550);
                   fill(255, 255, 255);
                   textSize(17);
                   text("Fase 2", 250, 43);
                   fill(77, 121, 255)
                   textSize(16);
                   text("Pontos: ", 48, 30)
                   text(pontos, 87, 30)
                   fill(255,0,0)
                   text("Vida: ", 440, 30)
                   text(vida, 467, 30)
                   textSize(15);
                   fill(255, 255, 255);
                   rect(16, 455, 80, 25, 15);
                   fill(255, 0, 0);
                   text("Voltar", 55, 473);
                
                 
              //--------------------------------------------------------------//      
                   // Função do mouse, direta e esquerda do personagem //
                 
                 image(personagem, personagemX, personagemY, 50, 50);
               //  image(imagPersonagem, personagemX, personagemY,30,30);//
                 
                 
                 if (keyIsDown(LEFT_ARROW)) {
                    if  (personagemX > 0 ){
                      personagemX -= personagemVel;
                      
                    }
                  }
                 if (keyIsDown(RIGHT_ARROW)) {
                    if  (personagemX < 455) {
                      personagemX += personagemVel;
                      
                    }
                 }
                 
              //--------------------------------------------------------------//      
                          // Retângulo azul // retângulo vermelho //
                 
                 image(hamburguer,objetoX,objetoY,40,40)
                 image(hamburguer,objetoX2,objetoY2,40,40)
                 push()
                 fill(0,0,255)
                 image(maca,objetoX1,objetoY1, 70, 70)
                 pop()
                 
              //-------------------------------------------------------------//
                                // Colisão dos retângulos // 
                 if(dist(personagemX,personagemY, objetoX, objetoY) < 35){
                   objetoY = 10
                   objetoX = random(350);
                   vida -= 1
                   
                 }
                 if(dist(personagemX,personagemY, objetoX2, objetoY2) < 35){
                   objetoY2 = 10
                   objetoX2 = random(350);
                   vida -= 1
                   
                 }
                 if(dist(personagemX,personagemY, objetoX1, objetoY1) < 40){
                   objetoY1 = 10
                   objetoX1 = random(350);
                   pontos += 1
                   
                 }
                 
              //-------------------------------------------------------------//
                                 // Queda dos retângulos // 
                 if(objetoY < 500){
                   objetoY += objetoVel + 2;
                 }
                 if(objetoY1 < 500){
                   objetoY1 += objetoVel;
                   
                 }
                 if(objetoY2 < 500){
                   objetoY2 += objetoVel + 3;
                 }
                 if(objetoY1 >= 500){
                   objetoY1 = 10;
                   objetoX1 = Math.random()*350;
                   
                 }
                 if(objetoY >= 500){
                   objetoY = 10;
                   objetoX = Math.random()*350;
                 }
                 if(objetoY2 >= 500){
                   objetoY2 = 10;
                   objetoX2 = Math.random()*350;
                 }
                 
                 
              //--------------------------------------------------------------//
                           // Sistema de pontos e de vidas //
                 
                 
                 
              //--------------------------------------------------------------//  
                       // Tela Game Over quando acabar as vidas //
                 
                  if(vida == 0){
                   tela = 4
                   
                  
                 }
              //--------------------------------------------------------------//     
                               // Tela fase 3 //
                 
                 if(pontos == 20){
                   tela = 7
                 }
               }
                
                if(tela === 6) { 
                   background(0, 0, 0);
                   textSize(40);
                   fill(0, 255, 0);
                   text("Parabéns!", 250, 100);
                   textSize(20);
                   fill(255, 0, 0);
                   text("Você Ganhou o jogo!", 250, 140);
                   fill(0,0,255)
                   textSize(16);
                   fill(77, 121, 255)
                   text("Pontos: ", 48, 30)  
                   text(pontos, 87, 30)
                   fill(255,0,0)
                   text("Vida: ", 440, 30)
                   text(vida, 467, 30)
                   textSize(15);
                   fill(255, 255, 255);
                   rect(16, 455, 80, 25, 15);
                   fill(255, 0, 0);
                   text("Voltar", 55, 473);
                   
                 }
                if(tela === 7) { 
                   background(0, 0, 0);
                   image(imag4, 0,0,500,500);
                   fill(255, 255, 255);
                   textSize(17);
                   text("Fase 3", 250, 43);
                   fill(77, 121, 255)
                   textSize(16);
                   fill(0, 255, 0);
                   text("Pontos: ", 48, 30)
                   text(pontos, 87, 30)
                   fill(255,0,0)
                   text("Vida: ", 440, 30)
                   text(vida, 467, 30)
                   textSize(15);
                   fill(255, 255, 255);
                   rect(16, 455, 80, 25, 15);
                   fill(255, 0, 0);
                   text("Voltar", 55, 473);
                  
                  
              //  image(imagPersonagem, personagemX, personagemY,30,30);//
              
              
                 image(personagem, personagemX, personagemY, 50, 50);
               
              //--------------------------------------------------------------//      
                   // Função do mouse, direta e esquerda do personagem //
                 
                 if (keyIsDown(LEFT_ARROW)) {
                    if  (personagemX > 0 ){
                      personagemX -= personagemVel;
                      
                    }
                  }
                 if (keyIsDown(RIGHT_ARROW)) {
                    if  (personagemX < 455) {
                      personagemX += personagemVel;
                      
                    }
                 }
                 
              //--------------------------------------------------------------//      
                          // Retângulo azul // retângulo vermelho //
                 
                 image(ha,objetoX,objetoY,40,40)
                 image(ha,objetoX2,objetoY2,40,40)
                 image(ha,objetoX3,objetoY3,40,40)
                 push()
                 fill(0,0,255)
                 image(maca,objetoX1,objetoY1, 70, 70)
                 pop()
                 
              //-------------------------------------------------------------//
                                // Colisão dos retângulos // 
                  
                 if(dist(personagemX,personagemY, objetoX, objetoY) < 35){
                   objetoY = 10
                   objetoX = random(350);
                   vida -= 1
                   
                 }
                 if(dist(personagemX,personagemY, objetoX3, objetoY3) < 35){
                   objetoY = 10
                   objetoX = random(350);
                   vida -= 1
                   
                 }
                 if(dist(personagemX,personagemY, objetoX2, objetoY2) < 35){
                   objetoY2 = 10
                   objetoX2 = random(350);
                   vida -= 1
                   
                 }
                 if(dist(personagemX,personagemY, objetoX1, objetoY1) < 40){
                   objetoY1 = 10
                   objetoX1 = random(350);
                   pontos += 1
                   
                 }
                 
              //-------------------------------------------------------------//
                                 // Queda dos retângulos // 
                  
                 if(objetoY < 500){
                   objetoY += objetoVel + 3;
                 }
                 if(objetoY1 < 500){
                   objetoY1 += objetoVel +1;
                   
                 }
                 if(objetoY2 < 500){
                   objetoY2 += objetoVel + 4;
                 }
                 if(objetoY3 < 500){
                   objetoY3 += objetoVel + 2;
                 }
                 if(objetoY1 >= 500){
                   objetoY1 = 10;
                   objetoX1 = Math.random()*350;
                   
                 }
                 if(objetoY >= 500){
                   objetoY = 10;
                   objetoX = Math.random()*350;
                 }
                 if(objetoY2 >= 500){
                   objetoY2 = 10;
                   objetoX2 = Math.random()*350;
                 }
                 if(objetoY3 >= 500){
                   objetoY3 = 10;
                   objetoX3 = Math.random()*350;
                   
                 }
                 
                 
              //--------------------------------------------------------------//
                           // Sistema de pontos e de vidas //
                 
                 
                 
              //--------------------------------------------------------------//  
                       // Tela Game Over quando acabar as vidas //
                 
                  if(vida == 0){
                   tela = 4
                   
                  
                 }
              //--------------------------------------------------------------//     
                               // Tela do último nível //
                  
                  if(pontos == 30){
                   tela = 6
                 }
              
               }
                 
              
                
              //--------------------------------------------------------------//   
                     // Coordenadas do mouse // coordenadas do mouse //
                
                push();
                fill( 255, 255, 0);
                circle(mouseX, mouseY,5);
                textSize(17)
                text(mouseX+";"+mouseY + " " + tela,250,15);
                pop();
                   
              }
              
              //--------------------------------------------------------------//  
                             // Mouse clicked // mouse clicked //
              
              function mouseClicked() {
                if(tela === 0){
                  
                  if (mouseX > 120 && mouseX < 370 && mouseY > 90 && mouseY < 140) {
                    
                    console.log("Clicou no Play");
                    tela = 1;
                    vida = 3;
                    pontos = 0;
                    objetoY = 100;
                    obejtoY1 = 100;
                  }
                
                else if (mouseX > 120 && mouseX < 370 && mouseY > 160 && mouseY < 210) {
                    console.log("Clicou em instruções");
                    tela = 2;
                    
                  }
                
                else if (mouseX > 120 && mouseX < 370 && mouseY > 230 && mouseY < 280) {
                    console.log("Clicou em Créditos");
                    tela = 3;
                    
                    
                  }
                }
                
                if (mouseX > 16 && mouseX < 96 && mouseY > 455 && mouseY < 480) {
                    console.log("Clicou em voltar");
                    tela = 0;
                  
                } 
              }