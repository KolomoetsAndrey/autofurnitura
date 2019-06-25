var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '10px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1600px', /* max-width оn very large screen */
        fields: '215px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1600px',
            fields: '215px'
        },
        lg: {
            width: '1200px',
            fields: '120px'
        },
        md: {
            width: '900px',
            fields: '85px'
        },
        sm: {
            width: '500px',
            fields: '40px'
        },
        xs: {
            width: '320px',
            fields: '35px'
        }
        /* 
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};

smartgrid('E:/INSTALL/MRWEBS/autofurnitura/css', settings);