'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#aboutMe')
    .fadeIn()
    .siblings()
    .hide();
  };

  module.aboutController = aboutController;
})(window);
