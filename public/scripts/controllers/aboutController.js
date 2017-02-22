'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show();

  };

  module.aboutController = aboutController;
})(window);
