export default {
	async fetch(request) {
		return new Response(JSON.stringify({
			ip: request.headers.get('CF-Connecting-IP'),
			userAgent: request.headers.get('User-Agent'),
			lat: request.cf.latitude,
			lon: request.cf.longitude,
			continent: request.cf.continent,
			country: request.cf.country,
			zip: request.cf.postalCode,
			metroCode: request.cf.metroCode,
			region: request.cf.region,
			regionCode: request.cf.regionCode,
			timezone: request.cf.timezone
		}), {
			headers: {
				"content-type": "application/json",
			},
		});
	},
};
