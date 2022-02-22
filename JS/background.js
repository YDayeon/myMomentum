const bgColor = [
  '#b0f2b4',
  '#baf2e9',
  '#bad7f2',
  '#f2bac9',
  '#f2e2ba',
  '#bee7e8',
  '#a0d2db',
  '#7d8cc4',
];

document.body.style.backgroundColor =
  bgColor[Math.floor(Math.random() * bgColor.length)];
