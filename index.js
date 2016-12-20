exports.decorateConfig = (config) => {
    return Object.assign({}, config, {
        css: `
            ${config.css} || ''}
            .terms_terms {
                background: url('./img/bg.jpg') center;
                background-size: cover;
            }
        `,
        termCSS: `
            x-screen {
                background: transparent !important;
            }
        `,
    });
};