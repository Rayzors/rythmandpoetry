import { Consumer } from '../Contexts/RootProvider';
import React from 'react';

/**
 *
 * @param {*} Component
 *
 * on prends un composant en paramètre qui sera retourné
 * en tant qu'enfant du Consumer
 */
const withConsumer = (Component) => (props) => {
  return (
    <Consumer>
      {(context) => <Component context={context} {...props} />}
    </Consumer>
  );
};

export default withConsumer;
