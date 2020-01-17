"use strict";

const SELECTOR_COUNTERS = '.AppStyles-Navigation-hasUpdatesCounterContainer';

module.exports = Franz => {
  const getMessages = () => {
    const divs = Array.from(document.querySelectorAll(SELECTOR_COUNTERS));
    const count = (divs.length > 0) ? divs.map(d => parseInt(d.innerText)).reduce((l, r) => l + r) : 0;
    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};
