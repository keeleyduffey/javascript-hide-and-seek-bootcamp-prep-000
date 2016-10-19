function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i] + n, 10)
  }
}

function deepestChild() {
  var child = document.getElementById('grand-node')
  var nextChild = child.children[0]

  while (nextChild) {
    child = nextChild
    nextChild = child.children[0]
  }

  return child
}
