// script.js
const container = document.querySelector('.container');
const panels = document.querySelectorAll('.panel');
const nodes = document.querySelectorAll('.node');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    const isLeft = panel.classList.contains('left');
    const isRight = panel.classList.contains('right');

    if (isLeft && container.classList.contains('expand-left')) {
      container.classList.remove('expand-left');
    } else if (isRight && container.classList.contains('expand-right')) {
      container.classList.remove('expand-right');
    } else {
      container.classList.remove('expand-left', 'expand-right');
      container.classList.add(isLeft ? 'expand-left' : 'expand-right');
    }
  });
});

nodes.forEach(node => {
  node.addEventListener('click', (e) => {
    e.stopPropagation();

    nodes.forEach(n => n.classList.remove('active'));
    node.classList.add('active');
  });
});
