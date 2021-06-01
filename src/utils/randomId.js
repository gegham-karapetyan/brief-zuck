export default function randomId() {
  let id = "";
  for (let i = 0; i < 10; i++) {
    id += String.fromCharCode(Math.floor(65 + Math.random() * 26));
  }
  return id;
}
