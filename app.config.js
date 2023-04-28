import "dotenv/config";

export default {
	extra: {
		eas: {
			projectId: "6710408e-6e19-4c0e-938c-6283b14d4930",
		},
		GOOGLE_SSO: process.env.GOOGLE_SSO,
	},
	android: {
		googleServicesFile: "./google-services.json",
		adaptiveIcon: {
			foregroundImage: "./assets/adaptive-icon.png",
			backgroundColor: "#ffffff",
		},
		package: "com.leftylefty.yum",
	},
};
