import React from 'react';
import { Base } from '../Base/Base';
import mockBase from '../Base/mockWithChildren';
import * as Styled from './styles';
import { PaginaNaoEncontrada } from '../PaginaNaoEncontrada/PaginanaoEncontrada';
import { Loading } from '../Loading/Loading';

function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  // eslint-disable-next-line
  const [hasError, setHasError] = React.useState(false);

  // Exemplo: Simulando carregamento e erro
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // setHasError(true); // Descomente para simular erro
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return <PaginaNaoEncontrada />;
  }

  return <Base {...mockBase} />;
}

export default Home;
