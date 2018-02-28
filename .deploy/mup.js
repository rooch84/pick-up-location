module.exports = {
	servers: {
		one: {
			host: 'dev.rooch.net',
			username: 'meteor',
		}
	},

	app: {
		name: 'pickUpBox',
		path: '../.',
    //port: 8080,

		servers: {
			one: {}
		},

		buildOptions: {
			serverOnly: true,
		},

		env: {
			// TODO: Change to your app's url
			// If you are using ssl, it needs to start with https://
			ROOT_URL: 'http://rc.chrisrooney.co.uk',
			MONGO_URL: 'none',
			PORT: 8081
		},

		// ssl: { // (optional)
		//   // Enables let's encrypt (optional)
		//   autogenerate: {
		//     email: 'email.address@domain.com',
		//     // comma separated list of domains
		//     domains: 'website.com,www.website.com'
		//   }
		// },

		docker: {
			// change to 'kadirahq/meteord' if your app is using Meteor 1.3 or older
			image: 'abernix/meteord:node-8.4.0-base'
		},

		// Show progress bar while uploading bundle to server
		// You might need to disable it on CI servers
		enableUploadProgressBar: true
	}
};
