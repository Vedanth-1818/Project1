import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
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

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const DestinationCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const DestinationImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
`;

const DestinationContent = styled.div`
  padding: 1.5rem;
`;

const DestinationTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: #333;
`;

const DestinationLocation = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const DestinationDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

const RegionFilter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const RegionButton = styled.button`
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

const destinations = [
  {
    id: 1,
    name: 'Taj Mahal',
    location: 'Agra, Uttar Pradesh',
    region: 'North',
    description: 'One of the seven wonders of the world, this ivory-white marble mausoleum is a symbol of eternal love.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    name: 'Varanasi Ghats',
    location: 'Varanasi, Uttar Pradesh',
    region: 'North',
    description: 'Experience spiritual awakening at the ancient ghats along the sacred Ganges River.',
    image: 'https://images.unsplash.com/photo-1561361058-8a0b1b0e3a0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 3,
    name: 'Jaipur City Palace',
    location: 'Jaipur, Rajasthan',
    region: 'North',
    description: 'Explore the magnificent palace complex that blends Rajasthani and Mughal architecture.',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 4,
    name: 'Backwaters of Kerala',
    location: 'Alleppey, Kerala',
    region: 'South',
    description: 'Cruise through serene backwaters on traditional houseboats surrounded by lush greenery.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 5,
    name: 'Mysore Palace',
    location: 'Mysore, Karnataka',
    region: 'South',
    description: 'Visit this spectacular Indo-Saracenic palace known for its stunning architecture and light shows.',
    image: '/mysorepalace.png'
  },
  {
    id: 6,
    name: 'Sundarbans',
    location: 'West Bengal',
    region: 'East',
    description: 'Explore the largest mangrove forest in the world, home to the Royal Bengal Tiger.',
    image: 'https://images.unsplash.com/photo-1590511916891-a0dba16b4b52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 7,
    name: 'Goa Beaches',
    location: 'Goa',
    region: 'West',
    description: 'Relax on pristine beaches with golden sands and enjoy the unique blend of Indian and Portuguese culture.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 8,
    name: 'Valley of Flowers',
    location: 'Uttarakhand',
    region: 'North',
    description: 'Trek through this UNESCO World Heritage site known for its meadows of endemic alpine flowers.',
    image: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 9,
    name: 'Kaziranga National Park',
    location: 'Assam',
    region: 'Northeast',
    description: 'Home to two-thirds of the world\'s one-horned rhinoceroses and diverse wildlife.',
    image: 'https://images.unsplash.com/photo-1581989737192-7d26958ff5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

const Destinations = () => {
  const [activeRegion, setActiveRegion] = React.useState('All');
  const regions = ['All', 'North', 'South', 'East', 'West', 'Northeast'];
  
  const filteredDestinations = activeRegion === 'All' 
    ? destinations 
    : destinations.filter(dest => dest.region === activeRegion);
  
  return (
    <PageContainer>
      <PageTitle>Explore Indian Destinations</PageTitle>
      
      <RegionFilter>
        {regions.map(region => (
          <RegionButton 
            key={region} 
            active={activeRegion === region}
            onClick={() => setActiveRegion(region)}
          >
            {region}
          </RegionButton>
        ))}
      </RegionFilter>
      
      <DestinationsGrid>
        {filteredDestinations.map(destination => (
          <DestinationCard key={destination.id}>
            <DestinationImage style={{ backgroundImage: `url(${destination.image})` }} />
            <DestinationContent>
              <DestinationTitle>{destination.name}</DestinationTitle>
              <DestinationLocation>{destination.location}</DestinationLocation>
              <DestinationDescription>{destination.description}</DestinationDescription>
            </DestinationContent>
          </DestinationCard>
        ))}
      </DestinationsGrid>
    </PageContainer>
  );
};

export default Destinations;