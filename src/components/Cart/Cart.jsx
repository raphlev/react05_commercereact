import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { handleEmptyCart } from '../../actions/cart';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';

// const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
const Cart = ({ cart }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link to="/MyStore" className={classes.link}>start adding some</Link>!
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            {/* We are passing props to children components, known as props drilling -
            here these handle* event handler are already passed from parent app component,
            and must be passed below to CartItem components
            Another solution would be to use React Context instead of props drilling making the code easier */}
            {/* <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} /> */}
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          {/* <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}> */}
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={() => dispatch(handleEmptyCart())}>
            Empty cart
          </Button>
          <Button component={Link} to="/MyStore/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return 'Loading...';

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
