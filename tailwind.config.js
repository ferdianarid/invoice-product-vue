module.exports = {
    // activate just in time mode
    mode: "jit",
    purge: [],
    // or 'media' or 'class'
    darkMode: false,
    // custom theme
    theme: {
        fontSize: {
            // text styles heading \ font size + line height
            'heading-sm': ['1.25rem', '140%'],
            'heading-md': ['1.75rem', '140%'],
            'heading-lg': ['2.25rem', '130%'],
            'heading-xl': ['3rem', '130%'],
            //  text styles xl \ font size + line height
            'xl-regular': ['1.125rem', '150%'],
            'xl-bold': ['1.125rem', '150%'],
            //  text styles lg \ font size + line height
            'lg-regular': ['1rem', '150%'],
            'lg-bold': ['1rem', '150%'],
            // text styles md \ font size + line height
            'md-regular': ['.875rem', '150%'],
            'md-bold': ['.875rem', '150%'],
            // text styles sm \ font size + line height
            'sm-regular': ['.75rem', '150%'],
            'sm-bold': ['.75', '150%']
        },
        // customize box shadow
        boxShadow: {
            'shadow-1': '0px 24px 96px rgba(0, 0, 0, 0.02)',
            'shadow-2': '0px 24px 96px rgba(0, 0, 0, 0.04',
            'shadow-3': '0px 24px 96px rgba(0, 0, 0, 0.08'
        },
        fontWeight: {
            normal: 400,
            bold: 700
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}