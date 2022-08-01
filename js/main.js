'use strict'

var gQuests = []
var gCurrQuestIdx = 0

function initGame() {
  removeVictory()
  gCurrQuestIdx = 0
  createQuests()
  renderQuest(gCurrQuestIdx)
}

function createQuests() {
  gQuests = [
    { id: 1, opts: ['Tel Aviv', 'Haifa'], correctOptIndex: 0 },
    { id: 2, opts: [`Be'er Sheva`, 'Paris'], correctOptIndex: 1 },
    { id: 3, opts: [`Amsterdam`, 'London'], correctOptIndex: 0 },
    { id: 4, opts: [`New York City`, 'Niagara Falls'], correctOptIndex: 0 },
    { id: 5, opts: [`Tiberias`, 'Las Vegas'], correctOptIndex: 1 },
  ]

  return gQuests
}

function renderQuest(questIdx) {
  var pictureEl = document.querySelector('.main .image img')
  var answersEl = document.querySelector('.answers')

  pictureEl.src = `img/${questIdx + 1}.jpg`

  var strHTML = ''

  for (var i = 0; i < gQuests[questIdx].opts.length; i++) {
    strHTML += `<div class="options option${
      i + 1
    }" onclick="checkAnswer(${i})">${gQuests[questIdx].opts[i]}</div>\n<br/>`
  }

  answersEl.innerHTML = strHTML
}

function checkAnswer(optIdx) {
  if (
    gCurrQuestIdx === gQuests.length - 1 &&
    optIdx === gQuests[gCurrQuestIdx].correctOptIndex
  ) {
    renderVictory()
  } else {
    if (optIdx === gQuests[gCurrQuestIdx].correctOptIndex) {
      gCurrQuestIdx++
      renderQuest(gCurrQuestIdx)
    } else {
      renderWrong()
    }
  }
}

function renderVictory() {
  var victoryEl = document.querySelector('.victory')
  var restartEl = document.querySelector('.restart')
  var answersEl = document.querySelector('.answers')

  answersEl.style.display = 'none'
  victoryEl.style.display = 'block'
  restartEl.style.display = 'block'
}

function removeVictory() {
  var victoryEl = document.querySelector('.victory')
  var restartEl = document.querySelector('.restart')
  var answersEl = document.querySelector('.answers')

  victoryEl.style.display = 'none'
  restartEl.style.display = 'none'
  answersEl.style.display = 'block'
}

function renderWrong() {
  var wrong = document.querySelector('.wrong')

  setTimeout(() => {
    wrong.style.display = 'none'
  }, 500)

  wrong.style.display = 'block'
}
