import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

export const Footer = () => {
    return (
      <Box>
      <Footer>
                 <Row>
   
                     <Column>
                         <Heading>Social Media</Heading>
                         <FooterLink href="https://www.facebook.com/profile.php?id=100051820911738">
                             <i className="fab fa-facebook-f">
                                 <span
                                     style={{
                                         marginLeft: "10px",
                                     }}
                                 >
                                     Facebook
                                 </span>
                             </i>
                         </FooterLink>
                         <FooterLink href="https://www.instagram.com/astra.x3/">
                             <i className="fab fa-instagram">
                                 <span
                                     style={{
                                         marginLeft: "10px",
                                     }}
                                 >
                                     Instagram
                                 </span>
                             </i>
                         </FooterLink>
                         <FooterLink href="https://twitter.com/astra524">
                             <i className="fab fa-twitter">
                                 <span
                                     style={{
                                         marginLeft: "10px",
                                     }}
                                 >
                                     Twitter
                                 </span>
                             </i>
                         </FooterLink>
                         <FooterLink href="https://www.youtube.com/channel/UCOx8z4HZ4MEf-Wkx_f4JP9Q">
                             <i className="fab fa-youtube">
                                 <span
                                     style={{
                                         marginLeft: "10px",
                                     }}
                                 >
                                     Youtube
                                 </span>
                             </i>
                         </FooterLink>
                     </Column>
                 </Row>
             </Footer>
        </Box>
    );
};
