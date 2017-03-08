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

    Project.all = [];
    projectData.forEach( ele => {
      Project.all.push(new Project(ele));
    });
  }

  Project.fetchAll = callback => {
    if (localStorage.projectData) {
      console.log('localStorage');
      Project.loadAll(JSON.parse(localStorage.projectData));
      callback();
    } else {
      $.getJSON('./data/blogProjects.json')
      .then( projectData => {
        Project.loadAll(projectData);
        localStorage.projectData = JSON.stringify(projectData);
        callback();
      }, function(err) {
        console.log(err);
      });
    }
  };

  module.Project = Project;
})(window);
