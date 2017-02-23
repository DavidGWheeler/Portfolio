'use strict';

(function(module) {
  const projectView = {};

  projectView.handleSubNav = function() {
    $('.sub-nav').on('click', '.col', function() {
      $('#' + $(this).data('content')).toggleClass('full-width');
    });

    $('.sub-nav .tab:first').click();
  };

  // columnTeaser
  projectView.columnTeaser = function() {
    $('.col-body *:nth-of-type(n+2)').hide();

    $('#projects').on('click', 'a.read-on', function(e){
      e.preventDefault();
      $(this).parent().find('*').fadeIn();
      $(this).hide();
    });
  };

  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  projectView.initIndexPage = function() {
    Project.all.forEach(function(a) {
      $('#projects').append(a.toHtml())
    });

    // projectView.handleMainNav();
    projectView.columnTeaser();
  };

  Project.fetchAll(projectView.initIndexPage);
  module.projectView = projectView;
})(window);
