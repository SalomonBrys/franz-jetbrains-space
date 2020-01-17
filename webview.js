"use strict";

const SELECTOR_COUNTERS = '.AppStyles-Navigation-hasUpdatesCounterContainer';

module.exports = Franz => {
  const getMessages = () => {
    const divs = document.querySelectorAll(SELECTOR_COUNTERS);
    const count = Array.from(divs).map(d => parseInt(d.innerText)).reduce((l, r) => l + r);
    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};
