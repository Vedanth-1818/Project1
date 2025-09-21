import React, { useState } from 'react';
import styled from 'styled-components';
import BookingForm from './BookingForm';
import BookingConfirmation from './BookingConfirmation';

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

const AccommodationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const AccommodationCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const AccommodationImage = styled.div`
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AccommodationContent = styled.div`
  padding: 1.5rem;
`;

const AccommodationTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: #333;
`;

const AccommodationLocation = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const AccommodationType = styled.span`
  background-color: #138808;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  display: inline-block;
  margin-bottom: 1rem;
`;

const AccommodationDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

const AccommodationFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Feature = styled.span`
  background-color: #f5f5f5;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #333;
`;

const BookButton = styled.button`
  background-color: #FF9933;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #e88a2a;
  }
`;

const TypeFilter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const TypeButton = styled.button`
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`;

const accommodations = [
  {
    id: 1,
    name: 'Rajasthani Heritage Haveli',
    location: 'Jaipur, Rajasthan',
    type: 'Heritage',
    description: 'Experience royal Rajasthani hospitality in this restored 150-year-old haveli with traditional architecture and modern amenities.',
    features: ['Local Cuisine', 'Cultural Programs', 'Sustainable Practices'],
    image: '/heritage.jpg'
  },
  {
    id: 2,
    name: 'Kerala Backwater Houseboat',
    location: 'Alleppey, Kerala',
    type: 'Houseboat',
    description: 'Cruise through serene backwaters on a traditional Kerala houseboat with local crew and authentic cuisine.',
    features: ['Local Crew', 'Authentic Meals', 'Eco-friendly'],
    image: '/housebout.png'
  },
  {
    id: 3,
    name: 'Himalayan Eco Lodge',
    location: 'Manali, Himachal Pradesh',
    type: 'Eco Lodge',
    description: 'Sustainable mountain retreat built with local materials and powered by renewable energy, offering stunning Himalayan views.',
    features: ['Solar Powered', 'Farm-to-Table', 'Trekking Guides'],
    image: '/himalaya.png'
  },
  {
    id: 4,
    name: 'Goan Beach Cottage',
    location: 'Agonda, Goa',
    type: 'Cottage',
    description: 'Charming beachfront cottages run by local families, offering authentic Goan hospitality and cuisine.',
    features: ['Beachfront', 'Family-run', 'Local Seafood'],
    image: '/goa.png'
  },
  {
    id: 5,
    name: 'Tribal Homestay',
    location: 'Ziro Valley, Arunachal Pradesh',
    type: 'Homestay',
    description: 'Immerse yourself in the culture of the Apatani tribe by staying with a local family in their traditional bamboo house.',
    features: ['Cultural Immersion', 'Traditional Meals', 'Local Guides'],
    image: '/tribe.png'
  },
  {
    id: 6,
    name: 'Desert Luxury Camp',
    location: 'Jaisalmer, Rajasthan',
    type: 'Luxury',
    description: 'Experience the Thar Desert in style with luxury tents, traditional entertainment, and camel safaris.',
    features: ['Camel Safaris', 'Folk Performances', 'Stargazing'],
    image: '/desert.jpg'
  }
];


const Accommodations = () => {
  const [activeType, setActiveType] = useState('All');
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState(null);
  
  const types = ['All', 'Heritage', 'Houseboat', 'Eco Lodge', 'Cottage', 'Homestay', 'Luxury'];
  
  const filteredAccommodations = activeType === 'All' 
    ? accommodations 
    : accommodations.filter(acc => acc.type === activeType);
  
  const handleBookNow = (accommodation) => {
    setSelectedAccommodation(accommodation);
    setShowBookingForm(true);
  };
  
  const handleBookingSubmit = (bookingData) => {
    setShowBookingForm(false);
    setBookingConfirmation(bookingData);
  };
  
  const handleCloseModal = () => {
    setShowBookingForm(false);
    setSelectedAccommodation(null);
  };
  
  const handleCloseConfirmation = () => {
    setBookingConfirmation(null);
  };
  
  return (
    <PageContainer>
      <PageTitle>Local Accommodations</PageTitle>
      
      <TypeFilter>
        {types.map(type => (
          <TypeButton 
            key={type} 
            active={activeType === type}
            onClick={() => setActiveType(type)}
          >
            {type}
          </TypeButton>
        ))}
      </TypeFilter>
      
      <AccommodationsGrid>
        {filteredAccommodations.map(accommodation => (
          <AccommodationCard key={accommodation.id}>
              <AccommodationImage>
                <img src={accommodation.image} alt={accommodation.name} />
              </AccommodationImage>
              <AccommodationContent>
                <AccommodationTitle>{accommodation.name}</AccommodationTitle>
                <AccommodationLocation>{accommodation.location}</AccommodationLocation>
                <AccommodationType>{accommodation.type}</AccommodationType>
                <AccommodationDescription>{accommodation.description}</AccommodationDescription>
                <AccommodationFeatures>
                  {accommodation.features.map((feature, index) => (
                    <Feature key={index}>{feature}</Feature>
                  ))}
                </AccommodationFeatures>
                <BookButton onClick={() => handleBookNow(accommodation)}>
                  Book Now
                </BookButton>
              </AccommodationContent>
            </AccommodationCard>
        ))}
      </AccommodationsGrid>
      
      {showBookingForm && selectedAccommodation && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            <BookingForm 
              accommodation={selectedAccommodation}
              onSubmit={handleBookingSubmit}
              onClose={handleCloseModal}
            />
          </ModalContent>
        </ModalOverlay>
      )}
      
      {bookingConfirmation && (
        <BookingConfirmation 
          booking={bookingConfirmation}
          onClose={handleCloseConfirmation}
        />
      )}
    </PageContainer>
  );
};

export default Accommodations;