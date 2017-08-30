var Observable = require("FuseJS/Observable");

function createPage(title) {
	return {
		title: title,
		clicked: function() {
            
			router.push("subPage")
		}
	};
}

var pages = Observable();
pages.add(createPage("Beginner"));
pages.add(createPage("Intermediate"));
pages.add(createPage("Expert"));

module.exports = { pages: pages };
