import { mergeStyles, mergeStyleSets} from '@fluentui/merge-styles';
import { findByLabelText } from '@testing-library/react';
import { NONAME } from 'dns';
import { readBuilderProgram } from 'typescript';
import crack2 from './images/crack2.png'
import crack from './images/crack.jpg'
import waymark from './images/waymark.jpg'

export const orange = mergeStyles({color: '#f37322'})
export const fieldwork = mergeStyles({
    fontFamily: 'fieldwork, sans-serif',
})

export const bodyContainer = mergeStyles({
    width: '90%',
    margin: 'auto',
    backgroundColor: '#212121',
    boxShadow: '0px 2px 20px 5px #A09C9B',

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
    width: 'inherit',
    backgroundColor: 'rgba(0,0,0,0.1)',
    //blurs nav bar
    backdropFilter: 'blur(8px)',
    zIndex: '9',
});

export const navBarContainer = mergeStyles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

})
export const dynamicSpark = mergeStyles({
    position: 'absolute',
    height: '100%',
    width: '100%',
})
export const mainBackground = mergeStyles({
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    marginBottom: '200px',
    paddingTop: '60.667px',
    position: 'relative',
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
//Three.js parameters
export const parameterContainer = mergeStyles({
    padding: '20px',
    backgroundColor: '#DEDEDE',
    borderStyle: 'solid',  
})
export const sliderContainer = mergeStyles({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
})
export const subSliderContainer = mergeStyles({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    margin: '0 10px 10px 0',
    backgroundColor: 'rgb(181,176,176)',
    padding: '10px',
    borderRadius: '10px',
    justifyContent: 'space-between'
    
})
export const anotherSliderContainer = mergeStyles({
    width: '150px',
    border: '2px solid black'
})
export const slider = mergeStyles({
    
})
export const parameterInput = mergeStyles({
    width: '75px'
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
    fontFamily: 'fieldwork, sans-serif',
    textAlign: 'center',
    marginBottom:'75px',
    fontSize: '50px',
    color: 'white'
})
export const largeScreenImageContainer = mergeStyles({
    width: '80%',
    display: 'flex',
    flexDirection: 'row'
})
export const smallScreenImageContainer = mergeStyles({
    display:'flex',
    alignItems: 'center', 
    flexDirection:'column',
    marginBottom: '200px',
    marginLeft: '20px',
    marginRight: '20px',
})
export const leftLargeImage = mergeStyles({
    float: 'left',
    width: '30%',
    display:'flex',
    alignItems: 'center', 
    flexDirection:'column',
})
export const subTextContainer = mergeStyles({
    marginLeft: '50px'
})
export const servicesParagraph = mergeStyles({
    fontFamily: 'fieldwork, sans-serif',
    lineHeight: '2',
    color: 'white'
})

export const mainSectionTitle = mergeStyles({
    textAlign: 'center',
    fontFamily: 'fieldwork, sans-serif'
})

export const ourWorkContainer = mergeStyles({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const ourWorkHeaderBox = mergeStyles({
    display: 'flex',
    color: 'white',
    position: 'absolute',
    flexDirection: 'column',
    width: '60%',
    margin: 'auto',
    textAlign: 'center',
    padding: '30px',
    border: '10px solid #212121',
    backgroundColor: 'rgb(0,0,0, 0.5)',
    'h1,p':{
        fontFamily: 'fieldwork'
    },

})
//Past work image grid
export const workGridContainer = mergeStyles({
    display: 'flex',
    flexWrap: 'wrap'
})
export const gridImageTemplate = mergeStyles({
    width: '25%',
    aspectRatio: '1/1',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
})
export const wayMarkGridImage = mergeStyles([gridImageTemplate, {
    backgroundImage: `url(${waymark})`
}])
export const sportfolioGridImage = mergeStyles([gridImageTemplate, {
    backgroundImage: `url(${crack})`
}])

export const largeGridImage = mergeStyles({
    width: '50%',
    aspectRatio: '1/1'
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
    marginTop: '30px'
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
    marginTop: '100px'
})
export const labels = mergeStyles({
    color: 'white',
    fontFamily: 'fieldwork, sans-serif',
    textAlign: 'center',
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
        fontSize: '50px',
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
        lineHeight: '40px',

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


