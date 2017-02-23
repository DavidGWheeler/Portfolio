'use strict';

page('/', projectController.index);
page('/about', aboutController.index);

// TODO: hook up the about sub-nav.
// page('/about/hobbies', aboutController.index);
// page('/about/goals', aboutController.index);
// page('/about/skills', aboutController.index);

page();
