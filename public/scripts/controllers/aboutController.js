'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#aboutMe')
    .fadeIn()
    .siblings()
    .hide();
  };

  aboutController.hobbies = () => {
    $('main section').hide();
    $('#col-one')
    .show()
    .siblings()
    .hide()
    .addClass('full-width');
  };

  module.aboutController = aboutController;
})(window);
