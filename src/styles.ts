import { mergeStyles, mergeStyleSets} from '@fluentui/merge-styles';
import { findByLabelText } from '@testing-library/react';
import { NONAME } from 'dns';


export const fieldwork = mergeStyles({
    fontFamily: 'fieldwork, sans-serif',
})

export const logo = mergeStyles(fieldwork, {fontSize: '50px', color: '#f37322'});

export const navBarButtons = mergeStyles({
    display: 'flex',
    marginLeft: 'auto',
    /** .navBar a{} **/
    'a':[fieldwork, {textDecoration: 'none', fontSize: '20px', color: '#f37322', marginLeft: '20px', marginRight: '20px'}],
    alignItems: 'center',
});

export const header = mergeStyles({
    position: 'fixed',
    width: '100%',
});

export const navBarContainer = mergeStyles({
    display: 'flex',
    padding: '20px',
    alignItems: 'center',
    justifyContent: 'space-between',

})

export const mainBackground = mergeStyles({
    backgroundColor: '#86E5EB',
})

export const mainSection = mergeStyles({
    margin: 'auto',
    width: '800px',
    paddingTop: '150px',
    paddingBottom: '0px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    'p':[{justifyContent: 'center', textAlign: 'center'}, [fieldwork]],
})
export const mainParagraph = mergeStyles({
    fontSize: 'x-large',
    lineHeight: '150%',
})
export const slogan = mergeStyles({
    marginTop: '100px',
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
export const formContainer = mergeStyles({
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    flexDirection: 'column',
})
export const labels = mergeStyles({
    color: 'white',
    fontFamily: 'fieldwork, sans-serif',
    textAlign: 'center',
    paddingTop: '20px',
})
export const nameInput = mergeStyles({
    width: '200px',
    justifyContent: 'center',
    borderStyle: 'solid',
    justifySelf: 'center',
    margin: 'auto',
})
export const dropDown = mergeStyles({
    width: '200px',
    justifyContent: 'center',
    borderStyle: 'solid',
    justifySelf: 'center',
    margin: 'auto',
    textAlign: 'center',
})
export const messageInput = mergeStyles({
    width: '400px',
    height: '200px',
    justifyContent: 'center',
    borderStyle: 'solid',
    justifySelf: 'center',
    margin: 'auto',
    resize: 'vertical' 
})
export const submit = mergeStyles({
    width: '100px',
    margin: '5px',

})
export const clear = mergeStyles({
    width: '100px',
    margin: '5px',
})
export const buttonContainer = mergeStyles({
    margin: 'auto',
    border: '1px solid white',
})
export const contactButtonContainer = mergeStyles({
    width: '130px',
    height: '40px',
    textAlign: 'center',
    margin: 'auto',
})
export const contactButton = mergeStyles({
    outline: 'none',
    height: '40px',
    textAlign: 'center',
    width: '130px',
    borderRadius: '40px',
    background: '#fff',
    border: '2px solid orange',
    color: 'orange',
    letterSpacing: '1px',
    textShadow: '0',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
})

export const successMessageShown = mergeStyles({
    color: 'white',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
})
export const successMessageHidden = mergeStyles({
    visibility: 'hidden',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
})
