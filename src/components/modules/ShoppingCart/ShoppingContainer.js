import {Container} from 'unstated'

class ShoppingContainer extends Container {
    state = { cart: [] };
    addItem = (value) => {
      this.setState({ cart: value });
      console.log(this.state.cart); // 1
    };
  }
  export default ShoppingContainer