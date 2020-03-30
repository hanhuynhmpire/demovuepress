module.exports = {"title":"Vietnam Business Listing","description":"Business Directory Vietnam, List of companies in Vietnam with detailed business description, contact details, financial performance, address, Vietnam Companies database","themeConfig":{"nav":null,"bannerAds":[{"text":"Ads Banner 1","imagePath":"/hero.png"},{"text":"Ads Banner 2","imagePath":"/hero.png"}],"search":true,"logo":"/assets/img/main-logo.svg","searchMaxSuggestions":10,"searchPlaceholder":"Search title ...","smoothScroll":true},"head":[
    [
      "link",
      {
        "rel": "apple-touch-icon",
        "sizes": "180x180",
        "href": "/assets/favicons/apple-icon-180x180.png"
      }
    ],
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "32x32",
        "href": "/assets/favicons/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "16x16",
        "href": "/assets/favicons/favicon-16x16.png"
      }
    ],
    [
      "link",
      {
        "rel": "manifest",
        "href": "/assets/favicons/manifest.json"
      }
    ],
    [
      "link",
      {
        "rel": "shortcut icon",
        "href": "/assets/favicons/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "msapplication-TileColor",
        "content": "#3a0839"
      }
    ],
    [
      "meta",
      {
        "name": "msapplication-config",
        "content": "/assets/favicons/browserconfig.xml"
      }
    ],
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#ffffff"
      }
    ],
	[
		"script",
		{
			src: "https://vietnam-db.com/includeAdsense.js"
		}
	]
  ],"updatedDate":"March 28, 2020","plugins":
  [
    [
      '@vuepress/google-analytics',
      {
		'ga': 'UA-142489108-4'
      }
    ],
	[
	  'vuepress-plugin-sitemap',
	  {
		'hostname': 'https://vietnam-db.com'
	  }
	],
	[
	  'vuepress-plugin-custom-popup',
	  {
		'endpoint': 'https://w0s7z4bjge.execute-api.us-west-2.amazonaws.com/dev/mail?src=vietnam-db.com'
	  }
	]
  ]}