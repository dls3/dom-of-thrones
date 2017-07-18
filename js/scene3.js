function scene3() {
  console.log('Executing scene 3!');

  stage = document.querySelector('#stage')
  mySrc = desert.getAttribute('src');
  stageImg = document.querySelector('#stage-img');
  stageImg.setAttribute('src', mySrc);

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
}


// Setup Files
// Query Stage
// Setup Setting
// Setup Cast
// Setup Prop
// Setup Animations
