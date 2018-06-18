function Ranking(selector) {
  Component.call(this, selector);
  this.numbers = [];
  this.countNumbers = [{
    id: Number,
    count: Number
  }];
}

Ranking.prototype = Object.create(Component.prototype);
Ranking.constructor = Ranking;

Ranking.prototype.init = function () {
  const self = this;

  axios.get('http://localhost:3000/numbers')
    .then(function (response) {
      self.countNumbers = response.data.data.map(function (number) {
        return {
          id: number.id,
          count: number.count
        }
      });

      self.render();
    })
    .catch(function (error) {
      console.error(error);
    });
};

Ranking.prototype.render = function () {
  const container = this.getDOMElement();

  let listElement = document.getElementById('numbers-ranking');
  while (listElement.firstChild) {
    listElement.removeChild(listElement.firstChild);
  }

  this.countNumbers.forEach(function (number) {
    const listElement = document.createElement('li');
    listElement.classList.add('list-group-item');
    listElement.innerHTML = number.id + '   occurrences of the number = ' + number.count;

    container.appendChild(listElement);
  });
};