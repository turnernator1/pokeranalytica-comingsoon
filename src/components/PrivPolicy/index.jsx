import React from "react";
import { Button, Modal, Paper, Typography } from '@mui/material';



const PrivPolicy = ({ onClose }) => {



  return (
    <Modal open={true} onClose={onClose}>
    <Paper sx={{ overflow:'auto', height: '80%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', maxWidth: 600, p: 3 }}>
      <Button variant="contained" style={{padding: 0, backgroundColor: '#27AAE1', position: 'absolute', top: '5px', right: '5px', width: '20px', height: '20px', borderRadius: '1rem' }} onClick={onClose}>x</Button>
      <Typography variant="h5" mb={2}>Privacy Policy</Typography>
      <Typography variant="body1" mb={2}>

Poker Analytica is committed to providing quality services to you and this policy outlines our ongoing obligations to you in respect of how we manage your Personal Information.
We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the way in which we collect, use, disclose, store, secure and dispose of your Personal Information.
A copy of the Australian Privacy Principles may be obtained from the website of The Office of the Australian Information Commissioner at https://www.oaic.gov.au/.
    </Typography>
    <Typography variant="h6" mb={2}>What is Personal Information and why do we collect it?</Typography>
    <Typography variant="body1" mb={2}>
    Personal Information is information or an opinion that identifies an individual. Examples of Personal Information we collect includes names, addresses, email addresses, phone and facsimile numbers.
This Personal Information is obtained in many ways including [interviews, correspondence, by telephone and facsimile, by email, via our website www.yourbusinessname.com.au, from your website, from media and publications, from other publicly available sources, from cookies- delete all that aren’t applicable] and from third parties. We don’t guarantee website links or policy of authorised third parties.
We collect your Personal Information for the primary purpose of providing our services to you, providing information to our clients and marketing. We may also use your Personal Information for secondary purposes closely related to the primary purpose, in circumstances where you would reasonably expect such use or disclosure. You may unsubscribe from our mailing/marketing lists at any time by contacting us in writing.
When we collect Personal Information we will, where appropriate and where possible, explain to you why we are collecting the information and how we plan to use it.
    </Typography>
    <Typography variant="h6" mb={2}>Sensitive Information</Typography>
    <Typography variant="body1" mb={2}>
    Sensitive information is defined in the Privacy Act to include information or opinion about such things as an individual's racial or ethnic origin, political opinions, membership of a political association, religious or philosophical beliefs, membership of a trade union or other professional body, criminal record or health information.
Sensitive information will be used by us only:
•	For the primary purpose for which it was obtained
•	For a secondary purpose that is directly related to the primary purpose
•	With your consent; or where required or authorised by law.

    </Typography>
    <Typography variant="h6" mb={2}>Third Parties</Typography>
    <Typography variant="body1" mb={2}>
    Where reasonable and practicable to do so, we will collect your Personal Information only from you. However, in some circumstances we may be provided with information by third parties. In such a case we will take reasonable steps to ensure that you are made aware of the information provided to us by the third party.
    </Typography>
    <Typography variant="h6" mb={2}>Disclosure of Personal Information</Typography>
    <Typography variant="body1" mb={2}>
    Your Personal Information may be disclosed in a number of circumstances including the following:
•	Third parties where you consent to the use or disclosure; and
•	Where required or authorised by law.
</Typography>
<Typography variant="h6" mb={2}>Security of Personal Information</Typography>
    <Typography variant="body1" mb={2}>
    Your Personal Information may be disclosed in a number of circumstances including the following:
•	Third parties where you consent to the use or disclosure; and
•	Where required or authorised by law.
</Typography>
<Typography variant="h6" mb={2}>Disclosure of Personal Information</Typography>
    <Typography variant="body1" mb={2}>
    Your Personal Information is stored in a manner that reasonably protects it from misuse and loss and from unauthorized access, modification or disclosure.
When your Personal Information is no longer needed for the purpose for which it was obtained, we will take reasonable steps to destroy or permanently de-identify your Personal Information. However, most of the Personal Information is or will be stored in client files which will be kept by us for a minimum of 7 years.

</Typography>
<Typography variant="h6" mb={2}>Access to your Personal Information</Typography>
    <Typography variant="body1" mb={2}>
    You may access the Personal Information we hold about you and to update and/or correct it, subject to certain exceptions. If you wish to access your Personal Information, please contact us in writing.
Poker Analytica will not charge any fee for your access request, but may charge an administrative fee for providing a copy of your Personal Information.
In order to protect your Personal Information we may require identification from you before releasing the requested information.

</Typography>
<Typography variant="h6" mb={2}>Maintaining the Quality of your Personal Information</Typography>
    <Typography variant="body1" mb={2}>
    It is an important to us that your Personal Information is up to date. We  will  take reasonable steps to make sure that your Personal Information is accurate, complete and up-to-date. If you find that the information we have is not up to date or is inaccurate, please advise us as soon as practicable so we can update our records and ensure we can continue to provide quality services to you.
</Typography>
<Typography variant="h6" mb={2}>Policy Updates</Typography>
    <Typography variant="body1" mb={2}>
    This Policy may change from time to time and is available on our website.</Typography>
<Typography variant="h6" mb={2}>Privacy Policy Complaints and Enquiries</Typography>
    <Typography variant="body1" mb={2}>
    f you have any queries or complaints about our Privacy Policy please contact us at: pokeranalytica@outlook.com</Typography>


      
      
    </Paper>
  </Modal>
  );
};

export default PrivPolicy;