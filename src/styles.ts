import { mergeStyles, mergeStyleSets } from '@fluentui/merge-styles';
import { findByLabelText } from '@testing-library/react';

export const fieldwork = mergeStyles({
    fontFamily: 'fieldwork, sans-serif',
})

export const logo = mergeStyles([fieldwork], {fontSize: '50px', color: '#f37322'});

export const navBarButtons = mergeStyles({
    display: 'flex',
    /** .navBar a{} **/
    justifyContent: 'space-between',
    'a':[fieldwork, {textDecoration: 'none', fontSize: '20px', color: 'pink', marginLeft: '20px', marginRight: '20px'}],
    alignItems: 'center',
});

export const header = mergeStyles({
    display: 'flex',
    padding: '20px',
    alignItems: 'center',
    // why shouldnt this be here and not in navBarButtons:
    //justifyContent: 'space-between',
});

export const mainSection = mergeStyles({
    display: 'flex',
    justifyContent: 'center',
    //why cant i center a flex column
    //flexDirection: 'column',
    'p':[{justifyContent: 'center',}]
})