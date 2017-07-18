function scene4() {
  console.log('Executing scene 4!');

  kingsLanding = document.querySelector('#kings-landing')
  stageImg = stage.querySelector('#stage-img')
  kingsLandingSrc = kingsLanding.getAttribute('src')
  stageImg.setAttribute('src', kingsLandingSrc)

  // CHARACTER 1
  danerysContainer = document.createElement('div');
  stage.append(danerysContainer);
  danerysContainer.style.position = 'absolute';
  danerysContainer.style.width = '10%';
  danerysContainer.style.height = '38%';
  danerysContainer.style.top = '55%';
  danerysContainer.style.left = '10%';

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
  danerysContainer.style.left = '5%'

  // CHARACTER 2
  drogContainer = document.createElement('div')
  drogContainer.id = 'joff-container'
  stage.append(drogContainer)
  drogContainer.style.width = '8%'
  drogContainer.style.position = 'absolute'
  drogContainer.style.height = '31%'
  drogContainer.style.top = '55%'
  drogContainer.style.left = '25%'
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

  // CHARACTER 3
  nedContainer = document.createElement('div')
  stage.append(nedContainer)

  nedContainer.style.position = 'absolute'
  nedContainer.style.width = '10%'
  nedContainer.style.height = '20%'
  nedContainer.style.top = '50%'
  nedContainer.style.left = '50%'
  nedContainer.style.border = 'none'
  nedContainer.style.background = 'none'

  ned = document.querySelector('#ned')
  nedContainer.append(ned)

  leather = document.querySelector('#leather-armour')
  nedContainer.append(leather)

  ned.style.border = 'none'
  leather.style.border = 'none'

  nedContainer.style.height = '44%'
  ned.style.width = '70%'

  ned.style.position = 'absolute'
  ned.style.top = 0
  leather.style.position = 'absolute'
  leather.style.bottom = 0
  nedContainer.style.height = '37%'
  nedContainer.style.top = '55%'
  nedContainer.style.left = '37%'

  // CHARACTER 4
  joffContainer = document.createElement('div')
  joffContainer.id = 'joff-container'
  stage.append(joffContainer)
  joffContainer.style.width = '8%'
  joffContainer.style.position = 'absolute'
  joffContainer.style.height = '31%'
  joffContainer.style.top = '55%'
  joffContainer.style.left = '65%'
  joffContainer.style.border = 'none'
  joffContainer.style.background = 'none'

  joffrey = document.querySelector('#joffrey')
  joffContainer.append(joffrey)
  joffrey.style.width = '75%'
  joffrey.style.left = '45%'
  joffrey.style.position = 'absolute'

  kingWardrobe = document.querySelector('#king')
  joffContainer.append(kingWardrobe)
  kingWardrobe.style.position = 'absolute'
  kingWardrobe.style.bottom = 0

  // ANIMATIONS
  var times = 100;
  for(var i = 0; i < times; i++) {
    frame(function() {
      danerysContainer.style.top = '55%'
      danerysContainer.style.left = '5%'});
    frame(function() {
      danerysContainer.style.top = '59%'
      danerysContainer.style.left = '1%'
    });
    frame(function() {
      drogContainer.style.top = '55%'
      drogContainer.style.left = '25%'});
    frame(function() {
      drogContainer.style.top = '51%'
      drogContainer.style.left = '20%'
    });
    frame(function() {
      nedContainer.style.top = '55%'
      nedContainer.style.left = '37%'});
    frame(function() {
      nedContainer.style.top = '59%'
      nedContainer.style.left = '42%'
    });
    frame(function() {
      joffContainer.style.top = '55%'
      joffContainer.style.left = '65%'});
    frame(function() {
      joffContainer.style.top = '59%'
      joffContainer.style.left = '69%'
    });
  }

}
