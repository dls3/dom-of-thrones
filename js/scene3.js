function scene3() {
  console.log('Executing scene 3!');

  stage = document.querySelector('#stage')
  mySrc = desert.getAttribute('src');
  stageImg = document.querySelector('#stage-img');
  stageImg.setAttribute('src', mySrc);

  // CHARACTER 1
  danerysContainer = document.createElement('div');
  stage.append(danerysContainer);
  danerysContainer.style.position = 'absolute';
  danerysContainer.style.width = '10%';
  danerysContainer.style.height = '38%';
  danerysContainer.style.top = '55%';
  danerysContainer.style.left = '25%';

  danerys = document.querySelector('#danerys');
  danerysContainer.append(danerys);
  danerys.style.width = '70%';
  danerys.style.position = 'absolute';
  danerys.style.top = 0;

  dress = document.querySelector('#blue-dress')
  danerysContainer.append(dress)

  danerysContainer.style.height = '44%'
  danerys.style.width = '70%'

  danerys.style.position = 'absolute'
  danerys.style.top = 0
  dress.style.position = 'absolute'
  dress.style.bottom = 0
  danerysContainer.style.height = '37%'
  danerysContainer.style.top = '55%'
  danerysContainer.style.left = '25%'

  // CHARACTER 2
  drogContainer = document.createElement('div')
  drogContainer.id = 'joff-container'
  stage.append(drogContainer)
  drogContainer.style.width = '8%'
  drogContainer.style.position = 'absolute'
  drogContainer.style.height = '31%'
  drogContainer.style.top = '55%'
  drogContainer.style.left = '55%'
  drogContainer.style.border = 'none'
  drogContainer.style.background = 'none'

  drogo = document.querySelector('#drogo')
  drogContainer.append(drogo)
  drogo.style.width = '75%'
  drogo.style.left = '23%'
  drogo.style.position = 'absolute'

  drogOutfit = document.querySelector('#bulky-man')
  drogContainer.append(drogOutfit)
  drogOutfit.style.position = 'absolute'
  drogOutfit.style.bottom = 0

  // Prop 1
  egg = document.querySelector('#egg')
  stage.append(egg)
  egg.style.position = 'absolute'
  egg.style.top = '70%'
  egg.style.left = '29%'
  egg.style.height = '11%'
  // egg.style.transform = 'rotateY(3500deg)'


  // EGG ANIMATION
  frame(function() {
    egg.style.top = '77%'
    egg.style.left = '31%'
  })

  frame(function() {
    egg.style.top = '71%'
    egg.style.left = '39%'
  })

  frame(function() {
    egg.style.top = '66%'
    egg.style.left = '47%'
  })

  frame(function() {
    egg.style.top = '61%'
    egg.style.left = '55%'
  })

  frame(function() {
    egg.style.left = '55%'
    egg.style.top = '63%'
  })

  frame(function() {
    egg.style.top = '61%'
    egg.style.left = '55%'
  })

  frame(function() {
    egg.style.top = '66%'
    egg.style.left = '47%'
  })

  frame(function() {
    egg.style.top = '71%'
    egg.style.left = '39%'
  })

  frame(function() {
    egg.style.top = '69%'
    egg.style.left = '31%'
  })

  frame(function() {
    egg.style.top = '71%'
    egg.style.left = '39%'
  })

  frame(function() {
    egg.style.top = '66%'
    egg.style.left = '47%'
  })

  frame(function() {
    egg.style.top = '61%'
    egg.style.left = '55%'
  })

  frame(function() {
    egg.style.left = '55%'
    egg.style.top = '63%'
  })

}


// Setup Files
// Query Stage
// Setup Setting
// Setup Cast
// Setup Prop
// Setup Animations
