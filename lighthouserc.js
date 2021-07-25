module.exports = {
    ci: {
        collect: {
            url: ['https://lavandre.local/']
        },
        assert: {
            "preset": "lighthouse:recommended",
            assertions: {
                'categories:performance': ['warn', { minScore: 0.8 }],
                'categories:accessibility': ['error', { minScore: 1 }]
            }
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};