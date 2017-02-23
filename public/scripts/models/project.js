'use strict';

(function(module) {
  function Project(opts) {
    this.title = opts.title;
    this.category = opts.category;
    this.projectName = opts.projectName;
    this.screenshot = opts.screenshot;
    this.imgAlt = opts.imgAlt;
    this.projectUrl = opts.projectUrl;
    this.body = opts.body;
    this.publishedOn = opts.publishedOn;
  }

  Project.all = [];

  Project.prototype.toHtml = function() {
    let template = Handlebars.compile($('#project-template').text());
// snagged from starter code lab-05
    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? `Last updated: ${this.daysAgo} days ago` : '(draft)';
    return template(this)
// snagged from starter code lab-05
  };

  Project.loadAll = function(projectData){
    projectData.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });

    projectData.forEach(function(ele) {
      Project.all.push(new Project(ele));
    })
  }

  Project.fetchAll = function() {
    if (localStorage.projectData) {
      console.log('localStorage');
      Project.loadAll(JSON.parse(localStorage.projectData));
      projectView.initIndexPage();
    } else {
      $.getJSON('./data/blogProjects.json')
      .then(function(projectData) {
        Project.loadAll(projectData);
        localStorage.projectData = JSON.stringify(projectData);
        projectView.initIndexPage();
      }, function(err) {
        console.log(err);
      });
    }
  };

  module.Article = Project;
})(window);
