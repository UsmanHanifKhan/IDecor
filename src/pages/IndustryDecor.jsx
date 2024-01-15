import  { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../assets/css/CommercialStyle.css';
import image1 from '../assets/images/Service/interior/img1.jpg'
import image2 from '../assets/images/Service/interior/img2.jpg'
import image3 from '../assets/images/Service/interior/img3.jpg'
import image4 from '../assets/images/Service/interior/img4.jpg'
import image5 from '../assets/images/Service/interior/img5.jpg'
import image6 from '../assets/images/Service/interior/img6.jpg'
import image7 from '../assets/images/Service/interior/img7.jpg'
import image8 from '../assets/images/Service/interior/img9.jpg'
import image9 from '../assets/images/Service/interior/img8.jpg'
import image10 from '../assets/images/Service/interior/img10.jpg'
import image11 from '../assets/images/Service/interior/img11.jpg'
import image12 from '../assets/images/Service/interior/img12.jpg'
import image13 from '../assets/images/Service/interior/img13.jpg'
import image14 from '../assets/images/Service/interior/img14.jpg'


import image15 from '../assets/images/Service/interior/img15.jpg'
import image16 from '../assets/images/Service/interior/img16.jpg'
import image17 from '../assets/images/Service/interior/img17.jpg'
import image18 from '../assets/images/Service/interior/img18.jpg'



import image19 from '../assets/images/Service/interior/img19.jpeg'
import image20 from '../assets/images/Service/interior/img20.jpeg'
import image21 from '../assets/images/Service/interior/img21.jpeg'
import image22 from '../assets/images/Service/interior/img22.jpeg'
import image23 from '../assets/images/Service/interior/img23.webp'
import image24 from '../assets/images/Service/interior/img24.jpeg'
import image25 from '../assets/images/Service/interior/img25.jpg'
import image26 from '../assets/images/Service/interior/img26.jpeg'
import image29 from '../assets/images/Service/interior/img29.jpeg'

import '../components/Products.css'
const IndustryDecor = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('home'); 

  // Dummy data with 10 entries
  const projects = [
    { image: image1, title: "home",Tag:"Scandinavian Simplicity" ,  description: "Embrace the clean lines, neutral colors, and minimalist furniture of Scandinavian design. Incorporate natural materials like wood and stone, along with plenty of natural light, to create a warm and inviting atmosphere", id: "1" },
    { image: image2, title: "office",Tag:"Nature-Inspired Biophilic Design" ,  description: "Bring the outdoors inside by incorporating biophilic design principles. Integrate natural materials, greenery, and ample natural light to create a refreshing and calming office environment that enhances employee well-being", id: "2" },
    { image: image3, title: "home" ,Tag:"Eclectic Bohemian Retreat"  , description: "nfuse your home with an eclectic mix of colors, patterns, and textures in a Bohemian style. Combine vintage furniture, global-inspired decor, and vibrant hues to achieve a laid-back and artistic vibe", id: '3' },
    { image: image29, title: "store",Tag:"Modern Boutique Elegance" ,  description: "Create a contemporary and upscale shopping experience with modern boutique design. Utilize sleek fixtures, minimalistic displays, and subtle lighting to highlight curated collections and provide an atmosphere of sophistication", id: '4' },
    { image: image4, title: "home",Tag:"Modern Boutique Elegance" ,  description: "Create a contemporary and upscale shopping experience with modern boutique design. Utilize sleek fixtures, minimalistic displays, and subtle lighting to highlight curated collections and provide an atmosphere of sophistication", id: '4' },
    { image: image5, title: "office", Tag:"Minimalist Tech Hub" , description: "Embrace a minimalist office design with a tech-centric focus. Use sleek furniture, neutral colors, and innovative technology to create a clean and efficient workspace that fosters productivity and collaboration", id: '5' },
    { image: image6, title: "home", Tag:"Classic Coastal Living" ,  description: "Capture the essence of coastal living with a classic beach-inspired design. Utilize a light color palette, natural textures, and nautical accents to create a relaxed and airy atmosphere reminiscent of seaside cottages.", id: '6' },
    { image: image7, title: "store",Tag:"Rustic Artisanal Market" ,  description: "Infuse a sense of authenticity with a rustic artisanal market design. Incorporate reclaimed wood, open shelving, and handcrafted displays to showcase products in a warm and welcoming environment, fostering a connection with handmade and locally sourced items", id: '7' },
    { image: image8, title: "office",Tag:"Industrial Warehouse Workspace" ,  description: "Transform your office into an industrial-inspired workspace. Utilize exposed brick, metal accents, and open ceilings for a raw and urban aesthetic that promotes a creative and dynamic atmosphere", id: '8' },
    { image: image9, title: "home", Tag:"Industrial Urban Loft" , description: "Transform your home into an industrial-style urban loft with exposed brick walls, metal accents, and open spaces. Incorporate reclaimed materials and a mix of modern and vintage furnishings for an edgy and sophisticated look", id: '9' },
    { image: image10, title: "store",Tag:"Tech and Gadget Haven" ,  description: "Design a store for technology enthusiasts with a futuristic and tech-forward atmosphere. Utilize clean lines, interactive displays, and cutting-edge lighting to showcase the latest gadgets and create an immersive shopping experience", id: '10' },
    { image: image11, title: "store",Tag:"Bohemian Lifestyle Emporium" ,  description: "Capture the free-spirited essence of Bohemian living in a store that embraces eclectic designs. Use vibrant colors, layered textures, and unique, globally inspired decor to create an atmosphere that encourages exploration and discovery", id: '11' },
    { image: image12, title: "home", Tag:"Luxurious Art Deco Glamour" ,  description: "Infuse a sense of luxury with Art Deco design elements. Incorporate bold geometric patterns, rich colors, and glamorous accessories like mirrored furniture and gold accents to create a sophisticated and opulent living space", id: '12' },
    { image: image13, title: "home", Tag:"Transitional Elegance" ,  description: "Achieve a blend of traditional and contemporary styles with transitional design. Combine classic furniture with modern finishes, neutral color schemes, and subtle accents for a timeless and sophisticated look that caters to a variety of tastes", id: '13' },
    { image: image14, title: "store",Tag:"Urban Streetwear Cool" ,  description: "Bring the energy of the street to your store with an urban streetwear design. Incorporate industrial materials, graffiti-style artwork, and bold lighting to create a trendy and dynamic space that resonates with the urban fashion scene", id: '14' },

    { image: image15, title: "office", Tag:'Culinary-Inspired Office', description: "Infuse a taste of culinary delight into the office by designing a space inspired by food. Use kitchen-style layouts, food-themed artwork, and communal dining areas to foster a sense of community and creativity among employees", id: '10' },
    { image: image16, title: "store",Tag:'Vintage Vinyl Record Store', description: "Pay homage to nostalgia with a vintage record store design. Use retro furnishings, classic signage, and wall-to-wall vinyl records to create a nostalgic and immersive space for music enthusiasts.", id: '11' },
    { image: image17, title: "store", Tag:'Green and Sustainable Concept Store', description: "Promote eco-conscious shopping with a green and sustainable concept store. Integrate recycled materials, energy-efficient lighting, and living greenery to create a store environment that aligns with environmentally friendly products and practices.", id: '12' },
    { image: image18, title: "office",Tag:'Interactive Social Media Lounge', description: "Design a social media-themed office space with vibrant colors, interactive walls, and collaborative spaces. Incorporate features reminiscent of popular social media platforms to create a dynamic and engaging environment for modern, tech-savvy teams", id: '13' },

    
    { image: image19, title: "bath", Tag:"Modern Spa Retreat:" , description: "Transform your bathroom into a serene spa retreat with clean lines, neutral colors, and luxurious materials. Incorporate features like a freestanding tub, rainfall shower, and minimalist fixtures for a contemporary and calming ambiance.", id: '11' },
    { image: image20, title: "bath",Tag:"Vintage Elegance" ,  description: "Infuse timeless charm into your bath with a vintage-inspired design. Utilize clawfoot tubs, intricate tile patterns, and classic fixtures to create an elegant and nostalgic atmosphere reminiscent of a bygone era.", id: '12' },
    { image: image21, title: "bath", Tag:"Contemporary Coastal Oasis" ,  description: "Capture the essence of coastal living in your bathroom by combining contemporary elements with seaside aesthetics. Use a light color palette, natural textures, and ocean-inspired accents to evoke a fresh and breezy feel, bringing a touch of the beach to your personal space", id: '13' },
    { image: image22, title: "bath", Tag:"Modern Minimalism " ,  description: "A sleek and functional kitchen design characterized by clean lines, minimalist cabinetry, and high-tech appliances for a contemporary culinary experience.", id: '14' },
    { image: image23, title: "bath", Tag:" Rustic Charm" ,  description: "Infuse warmth into your kitchen with rustic design elements, featuring natural materials, distressed wood, and vintage accents for a cozy, country-inspired cooking space.", id: '11' },
    { image: image24, title: "bath", Tag:"Industrial Chic " ,  description: "Embrace an urban aesthetic with an industrial kitchen, showcasing exposed brick, metal finishes, and open shelving to achieve a trendy, loft-style atmosphere.", id: '12' },
    { image: image25, title: "bath", Tag:"Timeless Traditional " ,  description: "Classic elegance defines this kitchen design, incorporating ornate details, rich wood finishes, and timeless fixtures for a sophisticated and enduring appeal.", id: '13' },
    { image: image26, title: "bath", Tag:"Sleek Scandinavian " ,  description: "Channel Scandinavian simplicity in your kitchen, with a bright, airy palette, minimalist furnishings, and natural textures, creating a clean and functional Nordic-inspired cooking haven", id: '14' },
  ];

  const handleClick = (id) => {
    navigate(`/commercial-decor/${id}`);
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.title === selectedCategory);

    const activeLinkStyle = {
      color: '#A78F30',  // Change this to your desired color
    };
  return (
    <>
       <nav className="navbar  navbar-expand-md navbar-light ">
       <div className="container-fluid d-flex border-bottom justify-content-center align-items-center">
         <div className="commericial d-flex flex-row flex-nowrap gap-3" style={{ height: '100%' , cursor:'pointer' }}>
         <p className="nav-link" style={selectedCategory === 'home' ?  activeLinkStyle : null} onClick={() => handleCategoryClick('home')}>Homes</p>
            <p className="nav-link" style={selectedCategory === 'bath' ?  activeLinkStyle : null} onClick={() => handleCategoryClick('bath')}>Kitchen</p>
            <p className="nav-link" style={selectedCategory === 'office' ?  activeLinkStyle : null} onClick={() => handleCategoryClick('office')}>Office</p>
            <p className="nav-link" style={selectedCategory === 'store' ?  activeLinkStyle : null} onClick={() => handleCategoryClick('store')}> Store </p>
     {/* Add more nav links as needed */}
         </div>
       </div>
     </nav>

      <Container  className='pt-5'>
        <Row className="justify-content-center">
          {filteredProjects.map((project, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
              <Card className="product-card" onClick={() => handleClick(project.id)}>
                <Card.Img variant="top" src={project.image} className="card-img-top" />
                <Card.Body>
                  <Card.Title>{project.Tag}</Card.Title>
                  <Card.Text>{project.description.split(' ').slice(0,5).join(' ')}...</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default IndustryDecor;
