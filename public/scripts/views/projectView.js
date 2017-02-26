'use strict';

(function(module) {
  const projectView = {};

  projectView.handleSubNav = () => {
    $('.sub-nav').on('click', '.col', function() {
      $('#' + $(this).data('content')).toggleClass('full-width');
    });

    $('.sub-nav .tab:first').click();
  };

  // columnTeaser
  projectView.columnTeaser = () => {
    $('.col-body *:nth-of-type(n+2)').hide();

    $('#projects').on('click', 'a.read-on', function(event){
      event.preventDefault();
      $(this).parent().find('*').fadeIn();
      $(this).hide();
    });
  };

  $('pre code').each((i, block) => {
    hljs.highlightBlock(block);
  });

  projectView.initIndexPage = () => {
    Project.all.forEach(a => {
      $('#projects').append(a.toHtml('#project-template'));
    });

    projectView.handleMainNav();
    projectView.columnTeaser();
  };

  Project.fetchAll(projectView.initIndexPage);
  module.projectView = projectView;
})(window);
