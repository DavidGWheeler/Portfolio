'use strict';

(function(module) {
  const projectView = {};

  // columnTeaser
  // projectView.columnTeaser = () => {
  //   $('.col-body *:nth-of-type(n+2)').hide();
  //
  //   $('#projects').on('click', 'a.read-on', function(event){
  //     event.preventDefault();
  //     $(this).parent().find('*').fadeIn();
  //     $(this).hide();
  //   });
  // };

  projectView.initIndexPage = () => {
    $('#projects').empty();
    Project.all.forEach(a => {
      $('#projects').append(a.toHtml('#project-template'));
    });

    // projectView.columnTeaser();
  };

  module.projectView = projectView;
})(window);
