import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 8, 6),
  },
}));

export default function Privacy() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen} style={{fontSize: "20px",  backgroundColor: "transparent", border: "none", color: "white"}}>
        Privacy Policy
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Privacy Policy</h2>
            <p id="transition-modal-description">
            <span style={{fontWeight: 800}}>1. What Information Do We Collect? </span>When you visit our website you may provide us with two types of information: personal information you knowingly choose to disclose that is collected on an individual basis and website use information collected on an aggregate basis as you and others browse our website.
            <br/>
            <span style={{fontWeight: 800}}>2. Personal Information You Choose to Provide </span>We may request that you voluntarily supply us with personal information, including your email address, postal address, home or work telephone number and other personal information for such purposes as correspondence, placing an order, requesting an estimate, or participating in online surveys. If you choose to correspond with us through email, we may retain the content of your email messages together with your email address and our responses. We provide the same protections for these electronic communications that we employ in the maintenance of information received by mail and telephone.
            <br/>
            <span style={{fontWeight: 800}}>3. Website Use Information </span>Similar to other websites, our site may utilize a standard technology called "cookies" (see explanation below, "What Are Cookies?") and web server logs to collect information about how our website is used. Information gathered through cookies and server logs may include the date and time of visits, the pages viewed, time spent at our website, and the sites visited just before and just after ours. This information is collected on an aggregate basis. None of this information is associated with you as an individual.
            <br/>
            <span style={{fontWeight: 800}}>4. How Do We Use the Information </span>That You Provide to Us? Broadly speaking, we use personal information for purposes of administering our business activities, providing service and support and making available other products and services to our customers and prospective customers. Occasionally, we may also use the information we collect to notify you about important changes to our website, new services and special offers we think you will find valuable. The lists used to send you product and service offers are developed and managed under our traditional standards designed to safeguard the security and privacy of all personal information provided by our users. You may at any time to notify us of your desire not to receive these offers.
            <br/>
            <span style={{fontWeight: 800}}>5. What Are Cookies? </span>Cookies are a feature of web browser software that allows web servers to recognize the computer used to access a website. Cookies are small pieces of data that are stored by a user's web browser on the user's hard drive. Cookies can remember what information a user accesses on one web page to simplify subsequent interactions with that website by the same user or to use the information to streamline the user's transactions on related web pages. This makes it easier for a user to move from web page to web page and to complete commercial transactions over the Internet. Cookies should make your online experience easier and more personalized.
            <br/>
            <span style={{fontWeight: 800}}>6. How Do We Use Information Collected From Cookies? </span>We use website browser software tools such as cookies and web server logs to gather information about our website users' browsing activities, in order to constantly improve our website and better serve our users. This information assists us to design and arrange our web pages in the most user-friendly manner and to continually improve our website to better meet the needs of our users and prospective users. Cookies help us collect important business and technical statistics. The information in the cookies lets us trace the paths followed by users to our website as they move from one page to another. Web server logs allow us to count how many people visit our website and evaluate our website's visitor capacity. We do not use these technologies to capture your individual email address or any personally identifying information about you.
            <br/>
            <span style={{fontWeight: 800}}>7. Notice of New Services and Changes </span>Occasionally, we may use the information we collect to notify you about important changes to our website, new services and special offers we think you will find valuable. As a user of our website, you will be given the opportunity to notify us of your desire not to receive these offers by clicking on a response box when you receive such an offer or by sending us an email request.
            <br/>
            <span style={{fontWeight: 800}}>8. How Do We Secure Information Transmissions?</span> When you send confidential personal information to us on our website, a secure server software which we have licensed encrypts all information you input before it is sent to us. The information is scrambled en route and decoded once it reaches our website. Other email that you may send to us may not be secure unless we advise you that security measures will be in place prior to your transmitting the information. For that reason, we ask that you do not send confidential information such as Social Security, credit card, or account numbers to us through an unsecured email.
            <br/>
            <span style={{fontWeight: 800}}>9. How Do We Protect Your Information? </span>Information Security -- We utilize encryption/security software to safeguard the confidentiality of personal information we collect from unauthorized access or disclosure and accidental loss, alteration or destruction. Evaluation of Information Protection Practices -- Periodically, our operations and business practices are reviewed for compliance with organization policies and procedures governing the security, confidentiality and quality of our information. Employee Access, Training and Expectations -- Our organization values, ethical standards, policies and practices are committed to the protection of user information. In general, our business practices limit employee access to confidential information, and limit the use and disclosure of such information to authorized persons, processes and transactions.
            <br/>
            <span style={{fontWeight: 800}}>10. How Can You Access and Correct Your Information? </span>You may request access to all your personally identifiable information that we collect online and maintain in our database by emailing us using the contact form provided to you within the site structure of our website.
            <br/>11. Do We Disclose Information to Outside Parties? We may provide aggregate information about our customers, sales, website traffic patterns and related website information to our affiliates or reputable third parties, but this information will not include personally identifying data, except as otherwise provided in this privacy policy.
            <br/>
            <span style={{fontWeight: 800}}>12. What About Legally Compelled Disclosure of Information? </span>We may disclose information when legally compelled to do so, in other words, when we, in good faith, believe that the law requires it or for the protection of our legal rights.
            <br/>
            <span style={{fontWeight: 800}}>13. Permission to Use of Materials </span>The right to download and store or output the materials in our website is granted for the user's personal use only, and materials may not be reproduced in any edited form. Any other reproduction, transmission, performance, display or editing of these materials by any means mechanical or electronic without our express written permission is strictly prohibited. Users wishing to obtain permission to reprint or reproduce any materials appearing on this site may contact us directly.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
