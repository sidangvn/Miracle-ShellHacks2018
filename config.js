/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},



		{
    			module:     "MMM-3Day-Forecast",
    			position:   "top_left",
				config: {
			api_key:    "1f500d3a47554f58b6299f6dd699c1b8",
			lat:        25.7825453,
			lon:        -80.2994988,
			units:      'M',
			lang:       'en',
			interval:   900000
	}
},


		/*{
			module: "compliments",
			position: "lower_third"
		},*/
	/*	{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Miami",
				locationID: "5162774",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "api.openweathermap.org/data/2.5/forecast?id=524901&APPID=5162774"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Miami",
				locationID: "5162774",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "api.openweathermap.org/data/2.5/forecast?id=524901&APPID=5162774"
			}
		},*/ 


			
			



		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},

		/*GLOBE*/
	
		{	
			module: 'MMM-Globe',
        		/*header: 'robstechlog.com',*/
        		position: 'lower_third',
        		config: {
            		size:'medium',
			dayLength: 24,
			viewAngle: 30,
			introLinesDuration: 2000,
			receiveExternalLocation: 0,
			
			location: [
				
					{lat:25.7825453, lng: -80.2994988, label: "Miami"},
					{lat:27.9941986, lng: -82.7344711, label: "Tampa"},
					{lat:34.0207305, lng: -118.691921, label: "LosAngeles"},
					{lat:40.6976701, lng: -74.2598665, label: "New York"},
					{lat:51.4244208, lng: -0.3607223, label: "London"},
					{lat:35.6735408, lng: 139.5703032, label: "Tokyo"},
					{lat:-33.8473567, lng: 150.6517899, label: "Sydney"},
					{lat:-33.9230997, lng: 18.4147362, label: "Cape Town"},
				]
            			}
        	},

		{
    			module: 'MMM-MirrorMirrorOnTheWall',
    			position: 'middle_center',
    			config: {}
		},


		{
		module: 'iFrame',
		position: 'center',	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
				url:'https://www.youtube.com/watch?v=pWUzkxtoJ2I',
				width: '100%' ,// Optional. Default: 100%
				height: '100px' ,//Optional. Default: 100px
			}
		},

		{
		module: 'MMM-iFrame',
		position: 'lower_third',	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
				url: ["https://youtube.com"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
				updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
				width: "100%", // Optional. Default: 100%
				height: "100px" //Optional. Default: 100px
			}
		},
	
		{
		module: 'MMM-Globe',
		position: 'center',
		config: {
		style: 'geoColor',
		imageSize: 600,
		ownImagePath:'',
		updateInterval: 10*60*1000
			}
		},
	
		{
		
		module: 'random_quotes',
		position: 'lower_third',
		config: {
						// The config property is optional
						// Without a config, a random quote is shown,
						// selected from all of the categories available.
			}
		},

		/*TRAFFIC*/
		{
		module: 'MMM-Traffic',
		position: 'top_right',
		classes: 'dimmed medium', //optional, default is 'bright medium', only applies to commute info not route_name
		config: {
		api_key: 'AIzaSyCc-WJJVxU-ueeWX00Tp72H-n3b48GxR6c',
		mode: 'Driving',
		origin: '11200 SW 8th St, Miami, FL 33199',
		destination: '4202 E Fowler Ave, Tampa, FL 33620',
		mon_destination: '4000 Central Florida Blvd, Orlando, FL 32816',
		fri_destination: '501 E High St, Oxford, OH 45056',
		//arrival_time: '0800', //optional, but needs to be in 24 hour time if used.
		route_name: 'Home to Work',
		changeColor: true,
		showGreen: false,
		limitYellow: 5, //Greater than 5% of journey time due to traffic
		limitRed: 20, //Greater than 20% of journey time due to traffic
		traffic_model: 'pessimistic',
		interval: 120000 //2 minutes
			}
		},

		{
			
		module: 'MMM-Scrobbler',
	
		position: 'top_left',
		config: {

		username: 'sidangvn',
	
		apikey: 'bf1d75ad4c14de8a0724b55824cf11ed',
	
		//time interval to search for new song (every 15 seconds)
		updateInterval: 5 * 1000,
		//how often should we try to retrieve a song if not listening
		delayCount: 5,
		//time interval to search for new song if the 5 times not listening is received.
		//set this to the same number as updateInterval to ignore this option	
		delayInterval: 120*1000,
		animationSpeed: 1000,
		showAlbumArt: true,
	    	showMetaData: true,
		//Determines the position of the meta text. Possible values: top, bottom, left, right
		alignment: "bottom", 
		}
	
		},

		{
		module: 'MMM-Screencast',
		position: 'center', // This position is for a hidden <div /> and not the screencast window
		config: {
			position: 'center',
			height: 300,
			width: 500,
			}
        	},
                
                //****FIND IPHONE********//		
		{
        		disabled: false,
        		module: 'MMM-FMI',
        		header: "",                                // standard header, underlined
       			position: 'bottom_center',
        		config: {
            		email: "*********@gmail.com",
            		pass: "**********",
            		lat: "25.759979",                     // your latitude
            		lon: "-80.374082",                    // your longitude
            		title: "",                            // Use instead of header. Not underlined!
            		maxWidth: "400px",
				}
		  },


	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

