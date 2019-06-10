import React,{Component} from 'react';

//redux
import {connect} from 'react-redux';
import {getAllProducts} from '../redux/actions/productsActions';
import SingleProduct from './SingleProduct';

class Products extends Component {

    componentDidMount(){
        this.props.getAllProducts();
    }

    render() {

            const {products} = this.props;
            console.log(products);

        return (
           <React.Fragment>
               <h2 className="text-center my-5">Products List</h2>
               <div className="row justify-content-center">
                   <div className="col-md-8">
                       <ul>
                           {products.map(product => (
                               <SingleProduct
                                    key={product.id}
                                    product={product}
                               />
                           ))}
                       </ul>
                   </div>
               </div>
           </React.Fragment>
        );
    }
}

const mapStateToProps = (state) =>({
    products: state.products1.products
})

export default connect(mapStateToProps, {getAllProducts}) (Products);