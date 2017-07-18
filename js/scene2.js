function scene2() {
  console.log('Executing scene 2!')

  // Setup Stage
  stage = document.querySelector('#stage')

  // document.querySelector('#sets')
  castle = document.querySelector('#castle')
  stageImg = stage.querySelector('#stage-img')
  castleImgSrc = castle.getAttribute('src')
  stageImg.setAttribute('src', castleImgSrc)

  // Setup Cast

  // Character 1
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
  nedContainer.style.left = '25%'

  // Character 2
  joffContainer = document.createElement('div')
  joffContainer.id = 'joff-container'
  stage.append(joffContainer)

  joffContainer.style.width = '10%'
  joffContainer.style.position = 'absolute'
  joffContainer.style.height = '30%'
  joffContainer.style.top = '58%'
  joffContainer.style.left = '45%'

  joffContainer.style.border = 'none'
  joffContainer.style.background = 'none'

  kingWardrobe = document.querySelector('#king')
  joffContainer.append(kingWardrobe)
  kingWardrobe.style.position = 'absolute'
  kingWardrobe.style.bottom = 0

  // Setup Props

  // Prop 1
  sword = document.querySelector('#sword')
  stage.append(sword)
  sword.style.position = 'absolute'
  sword.style.top = '77%'
  sword.style.left = '31%'
  sword.style.height = '5%'

  sword.style.transform = 'rotateY(150deg)'

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
