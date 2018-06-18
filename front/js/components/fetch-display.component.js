function fetchDisplay(selector) {
  Component.call(this, selector);
  this.numbersRandom = []; 
  
}

fetchDisplay.prototype = Object.create(Component.prototype);
fetchDisplay.constructor = fetchDisplay;

fetchDisplay.prototype.init = function () {
  const self = this;

  axios.get('http://localhost:3000/random-numbers')
    .then(function (response) {
      self.numbers = response.data.data.map(function (number) {       

        return {          
          id: number
        }
      });

      self.render();
    })
    .catch(function (error) {
      console.error(error);
    });
};

fetchDisplay.prototype.render = function () {
  const container = this.getDOMElement();

  let listElement = document.getElementById('fetch-display');
  while( listElement.firstChild ){
    listElement.removeChild( listElement.firstChild );
  }

  this.numbers.forEach(function (number) {
    const listElement = document.createElement('li');
    listElement.classList.add('list-group-item');
    listElement.innerHTML = number.id;

    container.appendChild(listElement);
  });
};