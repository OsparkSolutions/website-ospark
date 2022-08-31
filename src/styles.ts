import { mergeStyles, mergeStyleSets } from '@fluentui/merge-styles';
import { findByLabelText } from '@testing-library/react';

export const fieldwork = mergeStyles({
    fontFamily: 'fieldwork, sans-serif',
})

export const logo = mergeStyles([fieldwork], {fontSize: '50px', color: '#f37322'});

export const navBarButtons = mergeStyles({
    display: 'flex',
    /** .navBar a{} **/
    
    'a':[fieldwork, {textDecoration: 'none', fontSize: '20px', color: '#f37322', marginLeft: '20px', marginRight: '20px'}],
    alignItems: 'center',
});

export const header = mergeStyles({
    display: 'flex',
    padding: '20px',
    alignItems: 'center',
    justifyContent: 'space-between',
});

export const mainSection = mergeStyles({
    paddingTop: '100px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    'p':[{justifyContent: 'center', textAlign: 'center'}, [fieldwork]],
    
    
    
})