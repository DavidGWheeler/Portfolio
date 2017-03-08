'use strict';

(function(module) {
  const aboutView = {};

  const ui = () => {
    let $aboutMe = $('#aboutMe');

    $aboutMe
    .find('ul')
    .empty();

    $aboutMe
    .show()
    .siblings()
    .hide();
  };

  aboutView.index = () => {
    ui();
    $('#aboutMe ul').fadeIn();
  }

  module.aboutView = aboutView;
})(window);
