import styled from 'styled-components';
import mock from './mock';
import gridMock from '../../components/GridSection/mock';
import gridMockImage from '../../components/GridImage/mock';
import gridMockTwoCollumns from '../../components/GridTwoCollumns/mock';
import { GridSection } from '../../components/GridSection/GridSection';
import { GridImage } from '../../components/GridImage/GridImage';
import { GridTwoCollumns } from '../../components/GridTwoCollumns/GridTwoCollumns';

const MobileReset = styled.div`
  @media (max-width: 768px) {
    /* Reset geral para mobile */
    * {
      max-width: 100% !important;
      min-height: auto !important;
    }

    /* Garante que todas as seções sejam visíveis */
    #target1, #target2, #target3 {
      display: block !important;
      opacity: 1 !important;
      height: auto !important;
      overflow: visible !important;
    }

    /* GridSection - 1 coluna */
    #target1 .grid-section {
      grid-template-columns: 1fr !important;
      gap: 1rem !important;
    }

    /* GridImage - ajuste de altura */
    #target2 .grid-element {
      height: 200px !important;
    }

    /* GridTwoColumns - empilha colunas */
    #target3 {
      flex-direction: column !important;
      
      > div {
        width: 100% !important;
      }
    }
  }
`;

const GridImageFixed = styled.div`
  .grid-section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${({ theme }) => theme.spacings.large};
  }

  .grid-element {
    height: 280px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const children = (
  <MobileReset>
    <div id="target1" className="mobile-section">
      <GridSection {...gridMock} />
    </div>

    <GridImageFixed id="target2" className="mobile-section">
      <GridImage {...gridMockImage} />
    </GridImageFixed>

    <div id="target3" className="mobile-section">
      <GridTwoCollumns {...gridMockTwoCollumns} />
    </div>
  </MobileReset>
);

export default {
  ...mock,
  children,
};
