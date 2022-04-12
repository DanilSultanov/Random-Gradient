const values = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function runGradient(){
    function randomColor() {
        let color = "#";
        for (let i = 0; i < 6; i++) {
          const randomNumber = Math.floor(Math.random() * values.length)
          color += values[randomNumber];
        }
      
        return color
      }
      
      const color1 = randomColor();
      const color2 = randomColor();
      const color3 = randomColor();
      
      
      
      // degree
      const degree = Math.floor(Math.random() * 360)
      
      document.querySelector(
          'body',
      ).style.background 

      const bgColor =  `linear-gradient(${degree}deg, ${color1}, ${color2}, ${color3})`

      document.querySelector('body').style.background = bgColor

      document.querySelector('.color-text').textContent = bgColor
}

runGradient()

const randomColorBtn = document.querySelector('.random-color')

randomColorBtn.addEventListener('click', runGradient)