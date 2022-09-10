import { mergeStyles, mergeStyleSets } from '@fluentui/merge-styles';
import { findByLabelText } from '@testing-library/react';
import { NONAME } from 'dns';


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
    paddingTop: '300px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    'p':[{justifyContent: 'center', textAlign: 'center'}, [fieldwork]],
})


export const mainSectionImages = mergeStyles({
    float: 'none',
    width: '100%'
})

export const mainSectionTitle = mergeStyles({
    textAlign: 'center',
    //justifyContent: 'center'
})

export const ourWork = mergeStyles({
    clear: 'both',
})

export const openFormStyle = mergeStyles({
    height: '100%',
    width: '100%',
    position: 'fixed',
    zIndex: '1',
    top: '0',
    left: '0',
    backgroundColor: 'rgba(0,0,0, 0.9)',
    overflowX: 'hidden',
    transition: '0.5s',
})

export const closedFormStyle = mergeStyles({
    height: '100%',
    width: '0',
    position: 'fixed',
    zIndex: '1',
    top: '0',
    left: '0',
    backgroundColor: 'rgba(0,0,0, 0.9)',
    overflowX: 'hidden',
    transition: '0.5s',
})
export const closebtn = mergeStyles({
    position: 'absolute',
    top: '20px',
    right: '45px',
    fontSize: '60px',
    color: 'red',
    textDecoration: 'none',
})
