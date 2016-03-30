'use strict';

module.exports = function(articlesArr) {
	const alteredArticlesArr = [];	
	articlesArr.forEach(function(article) {
		var alteredArticle = {};
		for (var key in article) {
  			if (article.hasOwnProperty(key)) {
  				if (article[key]['auxiliaryText']) {
  					alteredArticle.byLine = article[key]['auxiliaryText'];
  				}
    		}
  		}
    	alteredArticlesArr.push(alteredArticle);
  	});
  	console.log(alteredArticlesArr);
	// return alteredArticlesArr;
};

/*  {
 *   "url": String,
 *   "headline": String,
 *   "imageUrl": String,
 *   "byLine": String
 *  } */