import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h3`
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #138808;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #138808;
  }
`;

const SubmitButton = styled.button`
  background-color: #FF9933;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #e88a2a;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const BookingSummary = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 4px;
  
  h4 {
    margin-bottom: 1rem;
    color: #333;
  }
  
  p {
    margin-bottom: 0.5rem;
    color: #666;
  }
  
  .price {
    font-weight: bold;
    color: #138808;
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`;

const BookingForm = ({ accommodation, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: 'standard'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onSubmit({
        ...formData,
        accommodationId: accommodation.id,
        accommodationName: accommodation.name,
        bookingDate: new Date().toISOString(),
        totalPrice: calculatePrice()
      });
      setIsSubmitting(false);
    }, 1000);
  };
  
  const calculatePrice = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    
    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    
    let basePrice = 0;
    switch (formData.roomType) {
      case 'standard':
        basePrice = 2500;
        break;
      case 'deluxe':
        basePrice = 4000;
        break;
      case 'suite':
        basePrice = 6500;
        break;
      default:
        basePrice = 2500;
    }
    
    return basePrice * nights * formData.guests;
  };
  
  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.checkIn !== '' &&
      formData.checkOut !== '' &&
      formData.guests > 0
    );
  };
  
  return (
    <FormContainer>
      <FormTitle>Book Your Stay at {accommodation.name}</FormTitle>
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Full Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="checkIn">Check-in Date</Label>
          <Input
            type="date"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="checkOut">Check-out Date</Label>
          <Input
            type="date"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            min={formData.checkIn || new Date().toISOString().split('T')[0]}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="guests">Number of Guests</Label>
          <Input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            max="10"
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="roomType">Room Type</Label>
          <Select
            id="roomType"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            required
          >
            <option value="standard">Standard Room</option>
            <option value="deluxe">Deluxe Room</option>
            <option value="suite">Luxury Suite</option>
          </Select>
        </FormGroup>
        
        {formData.checkIn && formData.checkOut && (
          <BookingSummary>
            <h4>Booking Summary</h4>
            <p><strong>Location:</strong> {accommodation.location}</p>
            <p><strong>Check-in:</strong> {new Date(formData.checkIn).toLocaleDateString()}</p>
            <p><strong>Check-out:</strong> {new Date(formData.checkOut).toLocaleDateString()}</p>
            <p><strong>Guests:</strong> {formData.guests}</p>
            <p><strong>Room Type:</strong> {formData.roomType.charAt(0).toUpperCase() + formData.roomType.slice(1)}</p>
            <p className="price">Total Price: ₹{calculatePrice().toLocaleString()}</p>
          </BookingSummary>
        )}
        
        <SubmitButton 
          type="submit" 
          disabled={!isFormValid() || isSubmitting}
        >
          {isSubmitting ? 'Processing...' : 'Book Now'}
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

export default BookingForm;