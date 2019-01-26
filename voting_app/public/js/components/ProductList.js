import React from 'react';
import Product from './Product';
import Seed from '../seed';

export default class ProductList extends React.Component {
  render() {
    const {
      id, title, description, url,
      votes, submitterAvatarUrl, productImageUrl
    } = Seed.products[0];
    return (
      <div className='ui unstackable items'>
        <Product  
          id={id}
          title={title}
          description={describe}
          url={url}
          votes={votes}
          submitterAvatarUrl={submitterAvatarUrl}
          productImageUrl={productImageUrl}
        />
      </div>
    );
  }
}