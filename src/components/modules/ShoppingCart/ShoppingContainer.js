import { Container } from 'unstated'

class ShoppingContainer extends Container {
    state = { cart: ['an item', 'another item'] };

    addItem = (value) => {
    	this.setState(state => ({ cart: [...state.cart, value] }));
    	console.log(this.state.cart); // 1
    };
}
export default ShoppingContainer
