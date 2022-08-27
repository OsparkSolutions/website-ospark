import { mergeStyles, mergeStyleSets } from '@fluentui/merge-styles';
import { findByLabelText } from '@testing-library/react';

export const navBarButtons = mergeStyles({
    display: 'flex',
    /** .navBar a{} **/
    justifyContent: 'right',
    'a':{
        color:"pink",
        fontFamily: 'fieldwork, sans-serif',
    },
});
export const logo = mergeStyles({
    fontFamily: 'fieldwork, sans-serif',
});
export const header = mergeStyles({
    display: 'flex',
    margin: '20px',
    padding: '20px',
    backgroundColor: 'grey',
});
