'use strict';

var allProjects = [];
console.log(allProjects);

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

Project.prototype.toHtml = function() {
  var template = Handlebars.compile($('#project-template').text());
// snagged from starter code lab-05
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `Last updated: ${this.daysAgo} days ago` : '(draft)';
  return template(this)
// snagged from starter code lab-05
};

projectData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projectData.forEach(function(ele) {
  allProjects.push(new Project(ele));
});

allProjects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
