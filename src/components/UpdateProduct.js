import React,{Component} from 'react';

import {connect} from 'react-redux';
import {getProduct,updateProduct} from '../redux/actions/productsActions';

class UpdateProduct extends Component {
    state={
        nombre:'',
        precio: '',
        error: false
    }

    nameRef = React.createRef();
    priceRef = React.createRef();

    componentDidMount(){
        const {id} = this.props.match.params;
       this.props.getProduct(id);
    }

    componentWillReceiveProps(nextProps,nextState){
        //console.log(nextProps);
        const {nombre,precio,id} = nextProps.product;

        this.setState({
                nombre,
                precio
        })
    }
    

    updateP = (e) =>{
        e.preventDefault();

        const newProduct = {
            id: this.props.match.params.id,
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
                error: false,
            })
        }

        this.props.updateProduct(newProduct);
        this.props.history.push('/');
    }

    render() {
        const {nombre,precio} = this.state;
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Update Product</h2>
                                <form onSubmit={this.updateP}>
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input defaultValue={nombre} ref={this.nameRef} type="text" className="form-control" placeholder="Title" />
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input defaultValue={precio} ref={this.priceRef} type="text" className="form-control" placeholder="Price" />
                                    </div>
                                    <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Save</button>
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

const mapStateToProps = state =>({
    product: state.products1.product
})

export default connect(mapStateToProps,{getProduct,updateProduct}) (UpdateProduct);