import { mergeStyles, mergeStyleSets} from '@fluentui/merge-styles';
import { findByLabelText } from '@testing-library/react';
import { NONAME } from 'dns';
import { readBuilderProgram } from 'typescript';


export const fieldwork = mergeStyles({
    fontFamily: 'fieldwork, sans-serif',
})

export const logo = mergeStyles(fieldwork, {
    fontSize: '50px', 
    color: '#f37322',
    cursor: 'pointer',
    textDecoration: 'none',
    'span': {color: 'black'},
});

export const navBarButtons = mergeStyles({
    display: 'flex',
    marginLeft: 'auto',
    /** .navBar a{} **/
    'a':[fieldwork, {textDecoration: 'none', fontSize: '20px', color: '#f37322', paddingLeft: '20px', paddingRight: '20px', height: '100%', fontWeight: '300'}],
    alignItems: 'center',
    'a:hover':{
        backgroundColor: 'gray'
    }
});

export const header = mergeStyles({
    position: 'fixed',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    //blurs nav bar
    backdropFilter: 'blur(8px)'
});

export const navBarContainer = mergeStyles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

})

export const mainBackground = mergeStyles({
    backgroundColor: 'white',
    marginBottom: '200px',
    paddingTop: '150px'
})

export const mainSection = mergeStyles({
    margin: 'auto',
    width: '75%',
    paddingTop: '150px',
    paddingBottom: '0px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    'p':[{justifyContent: 'center', textAlign: 'center'}, [fieldwork]],
})
export const mainParagraph = mergeStyles({
    fontSize: 'x-large',
    lineHeight: '150%',
})
export const orangeText = mergeStyles({
    color: '#f37322',
})
export const blueText = mergeStyles({
    color: '#256eda',
})
export const slogan = mergeStyles({
    marginTop: '100px',
})

export const sectionHeader = mergeStyles({
    fontFamily: 'fieldwork-hum, sans-serif',
    textAlign: 'center',

})
export const mainSectionImages = mergeStyles({
    float: 'none',
    width: '80%'
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
export const contactHeading = mergeStyles({
    color: 'white',
    fontFamily: 'fieldwork, sans-serif',
    textAlign: 'center',
    paddingTop: '20px',
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
export const emailInput = mergeStyles({
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






const footerMediaSettings = {
    display: 'block',
    width: '100%',
    marginBottom: '40px',
    textAlign: 'center',
}



// @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,500,300,700);

// * {
//   font-family: Open Sans;
// }


export const footer = mergeStyles({
    background: '#666',
    backgroundColor: 'gray',
    clear: 'both',  
    width: '100%',
    fontWeight: '600',
    fontFamily: 'fieldwork-hum, sans-serif',
    boxSizing: 'border-box',
    boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.12)',
    padding: '55px 50px',

    '& .footerLogo':{
        fontFamily: 'fieldwork, sans-serif',
        color: '#f37322',
        margin: '0',
        fontSize: '25px',
        'span': { color: 'black' }
    },
    '& .footerLeft, & .footerCenter, & .footerRight' : {
        display: 'inline-block',
        verticalAlign: 'top',
    },
    '& .footerLeft' : {
        width: '40%',
    },
    '& .footerLinks': {
        color: '#ffffff',
        margin: '20px 0 12px',
        padding: '0',
        'a':{
            display: 'inline-block',
            lineHeight: '1.8',
            fontWeight: '400',
            textDecoration: 'none',
            color:  'inherit',
        }
    },
    '& .footerCompanyName': {
        color:  '#222',
        fontSize: '14px',
        fontWeight: 'normal',
        margin: '0',
    },
    '& .footerCenter': {
        width: '35%',
    },
    '& .footerCenter i': {
        backgroundColor: '#33383b',
        color: '#ffffff',
        fontSize: '25px',
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        textAlign: 'center',
        lineHeight: '42px',
        margin: '10px 15px',
        verticalAlign: 'middle',
        display: 'inline-block',
    },
    '& .footerCenter i.faEnvelope': {
        fontSize: '17px',
        lineHeight: '38px',
    },
    '& .footerCenter p': {
      display: 'inline-block',
      color: '#ffffff',
      fontWeight: '400',
      verticalAlign: 'middle',
      margin: '0',
    },
    '& .footerCenter p span':{
      display: 'block',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '2',
    },
    '& .footerCenter p a': {
        color: '#f37322',
        textDecoration: 'none',
    },
    '& .footerLinks a:before': {
      content: "' |'",
      whiteSpace: 'pre',
      fontWeight:'300',
      fontSize: '20px',
      left: '0',
      color: '#fff',
      display: 'inline-block',
      paddingRight: '5px',
    },
    '& .footerLinks .link1:before': {
        content: 'none',
    },
    '& .footerRight':{
        width: '20%',
    },
    '& .companyAbout':{
        lineHeight: '20px',
        color: '#92999f',
        fontSize: '13px',
        fontWeight: 'normal',
        margin: '0',
    },
    '& .companyAbout span':{
        display: 'block',
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    '& .footerIcons':{
        marginTop: '25px'
    },
    '& .footerIcons a':{
        display: 'inline-block',
        width: '35px',
        height: '35px',
        cursor: 'pointer',
        backgroundColor:  '#33383b',
        borderRadius: '2px',

        fontSize: '20px',
        color: '#ffffff',
        textAlign: 'center',
        lineHeight: '35px',

        marginRight: '3px',
        marginBottom: '5px',
    },
    '& .footerIcons a i::before':{
        
    },

    '@media (max-width: 1000px)': {
        font: 'bold 12px sans serif',
        color:"blue",
        '.footerLeft': footerMediaSettings,
        '.footerCenter': footerMediaSettings,
        '.footerRight': footerMediaSettings,
        'footer .footerCenter i': {
            marginLeft: '0',
        }
    }
})


