// let counter = 60;

class UI {
  constructor(counter) {
    this.counter = counter;
  }

  change() {
    let b = setInterval(() => {
      let body1 = document.getElementById("cont");
      let counter = this.counter;
      if (counter > 0) {
        this.counter -= 5;
        switch (true) {
          case counter % 2 == 0 && !counter % 5 == 0:
            body1.style.cssText = `
                     background-color: hsl(45, 94%, 49%)`; //yellow
            break;
          case counter % 5 == 0 && counter > 10:
            body1.style.cssText = `
                     background-color:  hsl(114, 92%, 9%)`; //green
            break;
          case counter < 10:
            body1.style.cssText = `
                      background-color: hsl(6, 94%, 69%)`; //red
        }
      } else {
        body1.style.backgroundColor = "hsl(0, 100%, 74%)";
        clearTimeout(b);
      }

      console.log(counter);
      let displayCounter = document.getElementById("displayCounter");
      displayCounter.innerHTML = `Counter is at ${this.counter}`;
    }, 1000);
  }

  changer2() {
    let userCounter = document.getElementById("inputCounter");
    let userCounter3 = userCounter.value;
    let userCounter2 = new UI(userCounter3);
    userCounter2.change();
    userCounter.value = "";
  }
}

//const myUI = new UI(60);
//const myUI2 = new UI(100);
