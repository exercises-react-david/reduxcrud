import React,{Component} from 'react';

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
            name: this.nameRef.current.value,
            price: this.priceRef.current.value
        };

        this.setState({
            product: newProduct
        });

        console.log(this.state.product);

    }

    render() {
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Agregar Nuevo Producto</h2>
                                <form onSubmit={this.createProduct}>
                                    <div className="form-group">
                                        <label>Titulo</label>
                                        <input ref={this.nameRef} type="text" className="form-control" placeholder="Titulo" />
                                    </div>
                                    <div className="form-group">
                                        <label>Precio del Producto</label>
                                        <input ref={this.priceRef} type="text" className="form-control" placeholder="Precio" />
                                    </div>
                                    <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default NewProduct;