import { mergeStyles, mergeStyleSets } from '@fluentui/merge-styles';
import { findByLabelText } from '@testing-library/react';

export const fieldwork = mergeStyles({
    fontFamily: 'fieldwork, sans-serif',
})

export const navBarButtons = mergeStyles({
    display: 'flex',
    /** .navBar a{} **/
    justifyContent: 'right',
    'a':[fieldwork, {textDecoration: 'none', fontSize: '20px', color: 'pink', marginLeft: '20px', marginRight: '20px'}],
    
});
export const logo = mergeStyles([fieldwork], {fontSize: '50px', color: '#f37322'});
export const header = mergeStyles({
    display: 'flex',
    padding: '20px',
    justifyContent: 'space-between',
    alignItems: 'center',
});

