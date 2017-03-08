'use strict';

(function(module) {
  const projectView = {};

  projectView.initIndexPage = () => {
    $('#projects').empty();

    Project.all.forEach(a => {
      $('#projects').append(a.toHtml('#project-template'));
    });
  };

  module.projectView = projectView;
})(window);
