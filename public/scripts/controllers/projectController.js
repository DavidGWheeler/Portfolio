'use strict';

(function(module){
  const projectController = {};
  projectController.index = () => {
    Project.fetchAll(articleView.initIndexPage);

    $('.tab-content').hide();
    $('#projects').fadeIn();
  };

  module.projectController = projectController;
})(window);
