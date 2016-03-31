'use strict';

module.exports = function(articlesArr) {
	
  const alteredArticlesArr = [];	

	articlesArr.forEach(function(article) {

		var alteredArticle = {};
    var byLine, headline, url, imageUrl;

    for (var key in article) {
      if (article.hasOwnProperty(key)) {
        
        // url
        if (article[key]['url']) {
          alteredArticle.url = 'http://www.cnn.com/' + article[key]['url'];
        }

        // headline
        if (article[key]['headlinePlainText']) {
          alteredArticle.headline = article[key]['headlinePlainText'];
        }

        // imageUrl
        if (article[key]['media']) {
          if (article[key]['media'].elementContents) {
            if (article[key]['media'].elementContents['imageUrl']) {
              if (typeof article[key]['media'].elementContents['imageUrl'] === 'string' && article[key]['media'].elementContents['imageUrl'].length === 0) {
                alteredArticle.imageUrl = 'https://pbs.twimg.com/profile_images/508960761826131968/LnvhR8ED.png';
              } else {
                // NOTE: I see different sized image cuts, however; not different image grades in the JSON. 
                alteredArticle.imageUrl = article[key]['media'].elementContents['imageUrl'];
              }
            } else if (article[key]['media'].elementContents['video']) {
              alteredArticle.video = article[key]['media'].elementContents['video'];
            } else if (article[key]['media'].elementContents['gallery']) {
              alteredArticle.gallery = article[key]['media'].elementsContests['gallery'];
            }
          }
        } 

        // byLine
        if (typeof article[key]['auxiliaryText'] === 'string') {
  					if (article[key]['auxiliaryText'].length === 0) {
  						alteredArticle.byLine = 'By CNN Sponsored Author';
  					} else {
  						alteredArticle.byLine = article[key]['auxiliaryText'];
  					}
  				}

        }
    }

    alteredArticlesArr.push(alteredArticle);
  
  });
  // 
  console.log(alteredArticlesArr);
};