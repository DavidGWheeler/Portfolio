'use strict';

(function(module) {
  const projectView = {};

  // columnTeaser
  projectView.columnTeaser = () => {
    $('.col-body *:nth-of-type(n+2)').hide();

    $('#projects').on('click', 'a.read-on', function(event){
      event.preventDefault();
      $(this).parent().find('*').fadeIn();
      $(this).hide();
    });
  };

  projectView.initIndexPage = () => {
    Project.all.forEach(a => {
      $('#projects').append(a.toHtml('#project-template'));
    });

    projectView.columnTeaser();
  };

  Project.fetchAll(projectView.initIndexPage);
  module.projectView = projectView;
})(window);
