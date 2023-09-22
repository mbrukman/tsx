export const nodeVersions = [
	'20',
	...(
		(
			process.env.CI
			&& process.platform !== 'win32'
		)
			? [
				'12.20.0', // CJS named export detection added
				'12',
				'14',
				'16',
				'17',
				'18',
			]
			: []
	),
];