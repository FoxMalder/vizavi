$(document).ready(function() {
  $('#trading-market-content').easytabs({
    animate: true,
    animationSpeed: 200,
    defaultTab: "span#is-select",
    tabs: '> div > div > span',
    tabActiveClass: 'is-active',
    panelActiveClass: "active-content-div",
    updateHash: false
  });
});
