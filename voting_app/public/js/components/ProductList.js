import React from 'react';
import Product from './Product';
import Seed from '../seed';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    this.setState({
      products: Seed.products,
    });
  }

  handleProductUpVote = productId => {
    console.log(productId + ' was upvoted.');
    const { products } = this.state;
    const nextProducts = products.map(product => {
      if(product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });

    this.setState({
      products: nextProducts,
    });
  };


  render() {
    const products = this.state.products.sort((a, b) => (
      b.votes - a.votes
    ));

    const productComponents = products.map(product => {
      const {
        id, title, 
        description, 
        url, votes, 
        submitterAvatarUrl, 
        productImageUrl
      } = product;

      return (
        <Product  
          key={'product-' + id}
          id={id}
          title={title}
          description={description}
          url={url}
          votes={votes}
          submitterAvatarUrl={submitterAvatarUrl}
          productImageUrl={productImageUrl}
          onVote={this.handleProductUpVote}
        />
      );
    });

    return (
      <div className='ui unstackable items'>
        {productComponents}
      </div>
    );
  }
}