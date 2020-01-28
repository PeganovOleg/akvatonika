function getTimestamp() {
  let d = new Date();
  return d.getTime();
  console.log(d.getTime());
}

function randomDivId() {
  let d = Math.floor(Math.random() * 6) + 1;
  let n = Math.floor(Math.random() * 6) + 1;
  return `#slot-${d}${n}`;
}
