import React from 'react';
import styled from 'styled-components';

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
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ConfirmationHeader = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const ConfirmationIcon = styled.div`
  color: #138808;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ConfirmationTitle = styled.h2`
  color: #333;
  margin-bottom: 0.5rem;
`;

const ConfirmationMessage = styled.p`
  color: #666;
`;

const BookingDetails = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 4px;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const DetailLabel = styled.span`
  font-weight: 500;
  color: #333;
`;

const DetailValue = styled.span`
  color: #666;
`;

const TotalPrice = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: right;
  margin-top: 1rem;
  color: #138808;
`;

const CloseButton = styled.button`
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

const BookingConfirmation = ({ booking, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <ConfirmationHeader>
          <ConfirmationIcon>✓</ConfirmationIcon>
          <ConfirmationTitle>Booking Confirmed!</ConfirmationTitle>
          <ConfirmationMessage>
            Your stay at {booking.accommodationName} has been successfully booked.
          </ConfirmationMessage>
        </ConfirmationHeader>
        
        <BookingDetails>
          <DetailRow>
            <DetailLabel>Booking ID:</DetailLabel>
            <DetailValue>SWDSH-{Math.floor(Math.random() * 10000)}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Guest Name:</DetailLabel>
            <DetailValue>{booking.name}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Check-in:</DetailLabel>
            <DetailValue>{new Date(booking.checkIn).toLocaleDateString()}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Check-out:</DetailLabel>
            <DetailValue>{new Date(booking.checkOut).toLocaleDateString()}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Guests:</DetailLabel>
            <DetailValue>{booking.guests}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Room Type:</DetailLabel>
            <DetailValue>{booking.roomType.charAt(0).toUpperCase() + booking.roomType.slice(1)}</DetailValue>
          </DetailRow>
          
          <TotalPrice>Total: ₹{booking.totalPrice.toLocaleString()}</TotalPrice>
        </BookingDetails>
        
        <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#666' }}>
          A confirmation email has been sent to {booking.email}. Thank you for supporting local tourism!
        </p>
        
        <CloseButton onClick={onClose}>
          Close
        </CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default BookingConfirmation;