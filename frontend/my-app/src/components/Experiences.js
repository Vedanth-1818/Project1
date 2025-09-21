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

const ExperiencesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const ExperienceCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ExperienceImage = styled.div`
  height: 220px;
  background-size: cover;
  background-position: center;
`;

const ExperienceContent = styled.div`
  padding: 1.5rem;
`;

const ExperienceTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: #333;
`;

const ExperienceLocation = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const ExperienceCategory = styled.span`
  background-color: #138808;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  display: inline-block;
  margin-bottom: 1rem;
`;

const ExperienceDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button`
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

const experiences = [
  {
    id: 1,
    title: 'Traditional Rajasthani Cooking Class',
    location: 'Udaipur, Rajasthan',
    category: 'Culinary',
    description: 'Learn to prepare authentic Rajasthani dishes with a local family using traditional methods and locally sourced ingredients.',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    title: 'Kathakali Dance Workshop',
    location: 'Kochi, Kerala',
    category: 'Arts & Culture',
    description: 'Learn the basics of this classical dance form from Kerala, including makeup application, costumes, and expressive movements.',
    image: 'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 3,
    title: 'Himalayan Meditation Retreat',
    location: 'Rishikesh, Uttarakhand',
    category: 'Wellness',
    description: 'Experience traditional meditation techniques in the foothills of the Himalayas, guided by experienced local practitioners.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 4,
    title: 'Tribal Village Tour',
    location: 'Bastar, Chhattisgarh',
    category: 'Cultural',
    description: 'Visit remote tribal villages to learn about their unique customs, crafts, and sustainable way of life.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 5,
    title: 'Organic Tea Plantation Tour',
    location: 'Darjeeling, West Bengal',
    category: 'Agricultural',
    description: 'Walk through lush tea gardens, learn about sustainable farming practices, and participate in tea plucking and processing.',
    image: 'https://images.unsplash.com/photo-1582126892906-5ba118ead0c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 6,
    title: 'Traditional Pottery Workshop',
    location: 'Khurja, Uttar Pradesh',
    category: 'Crafts',
    description: 'Learn the ancient art of pottery from skilled artisans using traditional techniques passed down through generations.',
    image: 'https://images.unsplash.com/photo-1565193298357-c5b64a816c19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 7,
    title: 'Wildlife Safari',
    location: 'Ranthambore, Rajasthan',
    category: 'Adventure',
    description: 'Explore one of India\'s most renowned tiger reserves with local guides who are experts in tracking and conservation.',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 8,
    title: 'Traditional Textile Weaving',
    location: 'Varanasi, Uttar Pradesh',
    category: 'Crafts',
    description: 'Learn the intricate art of Banarasi silk weaving from master craftsmen who have preserved this tradition for centuries.',
    image: 'https://images.unsplash.com/photo-1528396518501-b53b655eb9b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

const Experiences = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const categories = ['All', 'Culinary', 'Arts & Culture', 'Wellness', 'Cultural', 'Agricultural', 'Crafts', 'Adventure'];
  
  const filteredExperiences = activeCategory === 'All' 
    ? experiences 
    : experiences.filter(exp => exp.category === activeCategory);
  
  return (
    <PageContainer>
      <PageTitle>Authentic Experiences</PageTitle>
      
      <CategoryFilter>
        {categories.map(category => (
          <CategoryButton 
            key={category} 
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryFilter>
      
      <ExperiencesGrid>
        {filteredExperiences.map(experience => (
          <ExperienceCard key={experience.id}>
            <ExperienceImage style={{ backgroundImage: `url(${experience.image})` }} />
            <ExperienceContent>
              <ExperienceTitle>{experience.title}</ExperienceTitle>
              <ExperienceLocation>{experience.location}</ExperienceLocation>
              <ExperienceCategory>{experience.category}</ExperienceCategory>
              <ExperienceDescription>{experience.description}</ExperienceDescription>
            </ExperienceContent>
          </ExperienceCard>
        ))}
      </ExperiencesGrid>
    </PageContainer>
  );
};

export default Experiences;