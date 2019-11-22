import styled from 'styled-components/macro';

const AppWrap = styled.div`
  // background: white;
  width: 100%:
  min-width: 380px;
  
  height: 1050px;
  margin: 0 auto;
  display: grid;
  // https://www.madebymike.com.au/writing/fluid-type-calc-examples/;
  font-size: calc(13px + (26 - 13) * ((100vw - 380px) / (1980 - 380)));
`;

export default AppWrap;
