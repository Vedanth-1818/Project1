import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #138808; /* Green color from Indian flag */
  color: white;
  padding: 2rem 0;
  margin-top: 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: #FF9933; /* Saffron color from Indian flag */
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: white;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 2rem;
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 1rem 2rem 0;
`;

const Footer = () => {
  const [copied, setCopied] = React.useState(false);
  const [supportEmail, setSupportEmail] = React.useState('vvedanth72@gmail.com');

  React.useEffect(() => {
    let mounted = true;
    fetch('http://127.0.0.1:5000/support')
      .then(res => res.json())
      .then(data => {
        if (mounted && data && data.email) setSupportEmail(data.email);
      })
      .catch(() => {
        // fallback: keep default email
      });
    return () => { mounted = false; };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(supportEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Swadeshi Tourism</h3>
          <p>Promoting local tourism and supporting Atmanirbhar Bharat through sustainable travel experiences.</p>
        </FooterSection>
        
        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/local-artisans">Local Artisans</a></li>
            <li><a href="/accommodations">Accommodations</a></li>
          </ul>
        </FooterSection>
        
        <FooterSection>
          <h3>Support</h3>
          <ul>
            <li><a href={`mailto:${supportEmail}`}>Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>

          <div style={{marginTop: '0.5rem'}}>
            <strong>Email:</strong> <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            <button onClick={handleCopy} style={{marginLeft: '0.5rem'}}>
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {new Date().getFullYear()} Swadeshi Tourism. All rights reserved. Made in India 🇮🇳</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;