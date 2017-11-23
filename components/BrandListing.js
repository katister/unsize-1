import React from 'react';
import styled from 'styled-components';
import { Image, H4 } from 'style';

const BrandWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;

  img {
    margin: 10px 0;
    @media (max-width: 768px) {
      max-height: 30px;
      height: auto;
      width: auto;
    }
  }
`;

const BrandListing = () => {
  return (
    <div>
      <H4>
        We’ve partnered with the following brands for the official launch of our
        chrome extension
      </H4>
      <BrandWrapper>
        <Image
          height="50px"
          border="yellow"
          src="/static/images/retailers/asos.png"
        />
        <Image
          height="50px"
          border="pink"
          src="/static/images/retailers/lyst.png"
        />
        <Image
          height="50px"
          border="green"
          src="/static/images/retailers/shopstyle.png"
        />
      </BrandWrapper>
    </div>
  );
};

export default BrandListing;
