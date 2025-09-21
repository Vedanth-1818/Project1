import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Button = styled(Link)`
  background-color: #FF9933;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #e88a2a;
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: #138808;
    margin: 0.5rem auto 0;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
`;

const FeatureContent = styled.div`
  padding: 1.5rem;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: #333;
`;

const FeatureDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

const AtmanirbharSection = styled.section`
  background-color: #f5f5f5;
  padding: 4rem 2rem;
  text-align: center;
`;

const AtmanirbharContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Discover the Beauty of Swadeshi Tourism</HeroTitle>
          <HeroSubtitle>
            Supporting local communities and promoting Atmanirbhar Bharat through sustainable tourism
          </HeroSubtitle>
          <Button to="/destinations">Explore Destinations</Button>
        </HeroContent>
      </HeroSection>
      
      <FeaturesSection>
        <SectionTitle>Why Choose Swadeshi Tourism?</SectionTitle>
        <FeatureGrid>
          <FeatureCard>
            <FeatureImage style={{ backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')` }} />
            <FeatureContent>
              <FeatureTitle>Support Local Communities</FeatureTitle>
              <FeatureDescription>
                Your travel directly benefits local artisans, guides, and small businesses across India.
              </FeatureDescription>
              <Button to="/local-artisans" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Meet Local Artisans
              </Button>
            </FeatureContent>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureImage style={{ backgroundImage: `url('https://images.unsplash.com/photo-1561361058-c24e021e2591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')` }} />
            <FeatureContent>
              <FeatureTitle>Authentic Experiences</FeatureTitle>
              <FeatureDescription>
                Immerse yourself in genuine cultural experiences that showcase India's rich heritage.
              </FeatureDescription>
              <Button to="/experiences" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Browse Experiences
              </Button>
            </FeatureContent>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureImage style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542367906-5b756d5e3290?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')` }} />
            <FeatureContent>
              <FeatureTitle>Sustainable Travel</FeatureTitle>
              <FeatureDescription>
                Eco-friendly accommodations and responsible tourism practices that preserve our natural beauty.
              </FeatureDescription>
              <Button to="/accommodations" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Find Accommodations
              </Button>
            </FeatureContent>
          </FeatureCard>
        </FeatureGrid>
      </FeaturesSection>
      
      <AtmanirbharSection>
        <AtmanirbharContent>
          <SectionTitle>Atmanirbhar Bharat Initiative</SectionTitle>
          <p>
            Swadeshi Tourism is proud to support the Atmanirbhar Bharat (Self-Reliant India) initiative by promoting domestic tourism and creating sustainable livelihoods for local communities. By choosing our services, you contribute to building a stronger, self-sufficient India.
          </p>
          <Button to="/destinations" style={{ marginTop: '2rem' }}>Start Your Journey</Button>
        </AtmanirbharContent>
      </AtmanirbharSection>
    </>
  );
};

export default Home;