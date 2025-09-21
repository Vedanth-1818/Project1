import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: #FF9933;
    margin: 0.5rem auto 0;
  }
`;

const PageDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  color: #666;
`;

const ArtisansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const ArtisanCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ArtisanImage = styled.div`
  height: 250px;
  background-size: cover;
  background-position: center;
`;

const ArtisanContent = styled.div`
  padding: 1.5rem;
`;

const ArtisanName = styled.h3`
  margin-bottom: 0.5rem;
  color: #333;
`;

const ArtisanLocation = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const ArtisanCraft = styled.span`
  background-color: #138808;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  display: inline-block;
  margin-bottom: 1rem;
`;

const ArtisanDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

const ArtisanProducts = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 1rem;
`;

const ProductImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;

const CraftFilter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const CraftButton = styled.button`
  background-color: ${props => props.active ? '#138808' : '#f5f5f5'};
  color: ${props => props.active ? 'white' : '#333'};
  border: none;
  padding: 0.5rem 1.5rem;
  margin: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: ${props => props.active ? '#138808' : '#e0e0e0'};
  }
`;

const SupportSection = styled.section`
  background-color: #f5f5f5;
  padding: 3rem 2rem;
  margin: 3rem -2rem -2rem;
  text-align: center;
`;

const SupportContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const artisans = [
  {
    id: 1,
    name: 'Ramesh Sharma',
    location: 'Jaipur, Rajasthan',
    craft: 'Blue Pottery',
    description: 'A master craftsman with over 30 years of experience in traditional Jaipur Blue Pottery, using techniques passed down through generations.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    products: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1577576223085-5c9596584cd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    ]
  },
  {
    id: 2,
    name: 'Lakshmi Devi',
    location: 'Pochampally, Telangana',
    craft: 'Ikat Weaving',
    description: 'An award-winning weaver specializing in the intricate Pochampally Ikat technique, creating stunning handwoven textiles.',
    image: 'https://images.unsplash.com/photo-1573879500655-98f2012dd1db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    products: [
      'https://images.unsplash.com/photo-1573879026263-0ae3b9599d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1573878928914-47a7d82ae9d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1573878665259-99cce10c2a09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    ]
  },
  {
    id: 3,
    name: 'Abdul Karim',
    location: 'Moradabad, Uttar Pradesh',
    craft: 'Brass Work',
    description: 'A skilled metalworker creating exquisite brass items using traditional techniques that have made Moradabad famous worldwide.',
    image: 'https://images.unsplash.com/photo-1595329088732-0b6a7d5b7517?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    products: [
      'https://images.unsplash.com/photo-1595329088732-0b6a7d5b7517?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1595329088732-0b6a7d5b7517?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1595329088732-0b6a7d5b7517?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    ]
  },
  {
    id: 4,
    name: 'Meena Kumari',
    location: 'Madhubani, Bihar',
    craft: 'Madhubani Painting',
    description: 'A talented artist preserving the ancient tradition of Madhubani painting, depicting nature and Hindu religious motifs.',
    image: 'https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    products: [
      'https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    ]
  },
  {
    id: 5,
    name: 'Gurpreet Singh',
    location: 'Amritsar, Punjab',
    craft: 'Phulkari Embroidery',
    description: 'A master of the vibrant Phulkari embroidery tradition of Punjab, creating stunning textiles with intricate patterns.',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    products: [
      'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    ]
  },
  {
    id: 6,
    name: 'Venkatesh Rao',
    location: 'Thanjavur, Tamil Nadu',
    craft: 'Bronze Casting',
    description: 'A fifth-generation bronze sculptor creating exquisite Thanjavur bronze idols using the lost-wax casting method.',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    products: [
      'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    ]
  }
];

const LocalArtisans = () => {
  const [activeCraft, setActiveCraft] = React.useState('All');
  const crafts = ['All', 'Blue Pottery', 'Ikat Weaving', 'Brass Work', 'Madhubani Painting', 'Phulkari Embroidery', 'Bronze Casting'];
  
  const filteredArtisans = activeCraft === 'All' 
    ? artisans 
    : artisans.filter(artisan => artisan.craft === activeCraft);
  
  return (
    <PageContainer>
      <PageTitle>Local Artisans & Businesses</PageTitle>
      <PageDescription>
        Discover skilled craftspeople preserving India's rich cultural heritage. By supporting these artisans, 
        you directly contribute to sustainable livelihoods and the preservation of traditional crafts.
      </PageDescription>
      
      <CraftFilter>
        {crafts.map(craft => (
          <CraftButton 
            key={craft} 
            active={activeCraft === craft}
            onClick={() => setActiveCraft(craft)}
          >
            {craft}
          </CraftButton>
        ))}
      </CraftFilter>
      
      <ArtisansGrid>
        {filteredArtisans.map(artisan => (
          <ArtisanCard key={artisan.id}>
            <ArtisanImage style={{ backgroundImage: `url(${artisan.image})` }} />
            <ArtisanContent>
              <ArtisanName>{artisan.name}</ArtisanName>
              <ArtisanLocation>{artisan.location}</ArtisanLocation>
              <ArtisanCraft>{artisan.craft}</ArtisanCraft>
              <ArtisanDescription>{artisan.description}</ArtisanDescription>
              <h4>Featured Products:</h4>
              <ArtisanProducts>
                {artisan.products.map((product, index) => (
                  <ProductImage key={index} style={{ backgroundImage: `url(${product})` }} />
                ))}
              </ArtisanProducts>
            </ArtisanContent>
          </ArtisanCard>
        ))}
      </ArtisansGrid>
      
      <SupportSection>
        <SupportContent>
          <h2>Support Atmanirbhar Bharat</h2>
          <p>
            By purchasing directly from local artisans, you're supporting the Atmanirbhar Bharat (Self-Reliant India) initiative. 
            Your contribution helps preserve traditional crafts, provides sustainable livelihoods, and strengthens local economies.
          </p>
        </SupportContent>
      </SupportSection>
    </PageContainer>
  );
};

export default LocalArtisans;