import React from 'react';
import styled from 'styled-components';
import './Cards.css'

const CardWrapper = styled.div`
  display: flex;
  justify-content: center; /* Horizontally center */
  align-items: center;
  height: 100vh;
  
`;


const Card = styled.div`
  background-color: #fff;
  border: 90px solid(120deg, rgb(93, 38, 93), transparent);
;
  border-radius: 10px;
  padding: 20px;
  ${'' /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */}
  box-shadow: 0 7px 6px rgba(60, 120, 81, 20.1);
  text-align: center;
  width: 400px;
  background: linear-gradient(190deg, rgb(93, 38, 93), transparent);
`;

const CardContent = styled.div`
  /* Center the content vertically and horizontally */
  ${'' /* display: flex; */}
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${'' /* width: 400px */}
  font-size: 18px; /* Increase font size */
  ${'' /* font-weight: bold;  */}
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  color: hsl(260, 91%, 22%) ;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px; /* Increase font size */
  ${'' /* font-weight: bold;  */}
  font-weight: 900;
  width:300px;
`;

function Cards() {
  return (
    <CardWrapper>
      <Card>
        <CardContent>
          {/* Your content goes here */}
          <h2>START INTERVIEW</h2>
          <p>After completion, receive a comprehensive analysis spotlighting your strengths, areas for improvement, and insights on your emotional responses.
          <br/> Get ready to uncover feedback that bridges the gap between preperation and perfection.
          </p>
          <br/>
          <Button>Begin Now</Button> {/* Button centered */}
          <br/><br/>


        </CardContent>
      </Card>
    </CardWrapper>
  );
}

export default Cards;
