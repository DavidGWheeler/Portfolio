'use strict';

(function(module) {
  const projectView = {};

  projectView.handleSubNav = function() {
    $('.sub-nav').on('click', '.col', function() {
      $('#' + $(this).data('content')).toggleClass('full-width');
    });

    $('.sub-nav .tab:first').click();
  };

  projectView.handleMainNav = function() {
    $('.main-nav').on('click', '.tab', function() {
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn();
    });

    $('.main-nav .tab:first').click();
  };

  // TODO: columnTeaser

  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  projectView.initIndexPage = function() {
    Project.all.forEach(function(a) {
      $('#projects').append(a.toHtml())
    });

    projectView.handleMainNav();
  };
  module.projectView = projectView;
})(window);
