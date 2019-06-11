import React,{Component} from 'react';

import {connect} from 'react-redux';
import {addProduct} from '../redux/actions/productsActions';

class NewProduct extends Component {

    state={
        product:{},
        error: false
    }

    nameRef = React.createRef();
    priceRef = React.createRef();

    

    createProduct = (e) =>{
        e.preventDefault();

        const newProduct = {
            nombre: this.nameRef.current.value,
            precio: this.priceRef.current.value
        };

        const {nombre, precio} = newProduct;

        if(nombre === '' || precio === ''){
            this.setState({
                error: true
            })
            return;
        }else{
            this.setState({
                error: false
            })
        }

        this.props.addProduct(newProduct);
        //console.log(this.state.product);

        this.props.history.push('/');

    }

    render() {

        return (
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Add new Product</h2>
                                <form onSubmit={this.createProduct}>
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input ref={this.nameRef} type="text" className="form-control" placeholder="Title" />
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input ref={this.priceRef} type="text" className="form-control" placeholder="Price" />
                                    </div>
                                    <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Add</button>
                                </form>
                                    {this.state.error ? 
                                        <div className="font-weight-bold alert alert-danger text-center mt-4">
                                            All fields are required
                                        </div>
                                        : ''
                                    }
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default connect(null, {addProduct}) (NewProduct);