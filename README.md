# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

`npx create-react-app my-app --template cra-template`

remove unceserrary files and folders

configure Service worker: index.js --> serviceWorkerRegistration.register();

configure redux action for Service Worker: https://medium.com/better-programming/let-users-know-when-you-have-updated-your-service-worker-in-create-react-app-b0c2701995b3

# PWA

https://create-react-app.dev/docs/making-a-progressive-web-app/

Let the user knows when updates come in App:
- https://medium.com/better-programming/let-users-know-when-you-have-updated-your-service-worker-in-create-react-app-b0c2701995b3
- https://github.com/gglukmann/cra-sw


## Application Templates

- ECommerce Web Shop - Build & Deploy an Amazing App | React.js, Commerce.js, Stripe
- Youtube: https://www.youtube.com/watch?v=377AQ0y6LPA
- Github: https://github.com/adrianhajdin/project_e_commerce
- Styles: https://gist.github.com/adrianhajdin/9867aefce5318f27c95990553f428c6e
- Icon Image: https://i.ibb.co/Qp1SXBw/commerce.png

## Dependencies

`npm install @material-ui/core @material-ui/icons @chec/commerce.js @stripe/react-stripe-js @stripe/stripe-js react-router-dom react-hook-form`

See web site: https://react-hook-form.com/


## commerce.js
Register and Get Sandbox Key from:

- https://dashboard.chec.io/settings/developer
- Sandbox instead Public keys ensuring that transactions are only for sanbox, only for testing


Set it to .env file:
 - REACT_APP_CHEC_PUBLIC_KEY=xxxxxxxxxx

Add shipping zone with shipping price: USA & Europe
- https://dashboard.chec.io/settings/shipping

Add products:
- https://dashboard.chec.io/products


- 1. 3:12  improvment of payment confirmation ..
- 2. REDUX setup:
   OK: app.js, actions, reducer (voir reducer cart si besoin de modifier le state ), cart, paymentForm, checkoutform, ..
   A FAIRE: 
   - ajouter action/reucer pour Checkout checkoutToken+activeStep+shippingData
   - comparer avec la version JSMastery..

- 3. Service Worker Alert: 
  - https://medium.com/better-programming/let-users-know-when-you-have-updated-your-service-worker-in-create-react-app-b0c2701995b3 + https://github.com/gglukmann/cra-sw
  - OK: add swalert actions, reducer, update app.js, service worker registration

- 4. Add Calendar

  Scoping CSS Classes to a Component in ReactJS Using CSS Modules:
  - https://0n3z3r0n3.medium.com/scoping-css-classes-to-a-component-in-reactjs-using-css-modules-c294dc6a0e02

  Add Calendar app from:
  - https://github.com/raphlev/React06_Calendar_From_VanillaJS

- 5. Version demo avec next.js: 
  - https://github.com/chec/commercejs-nextjs-demo-store
  - npm @chec/react-commercejs-hooks: https://www.npmjs.com/package/@chec/react-commercejs-hooks
  - Custom Checkout Fields | Commerce.js: https://www.youtube.com/watch?v=Jyy4XUH-2xA

- 6. Autre shopping cart javascript resources:
  - JavaScript Shopping Cart Tutorial for Beginners: https://www.youtube.com/watch?v=YeFzkC2awTM
  - E-Commerce JavaScript Tutorial - Shopping Cart from Scratch: https://www.youtube.com/watch?v=023Psne_-_4
  - Exemple comfy-house https://js-comfy-home-furniture-store.netlify.app/
    -  https://github.com/search?q=js-comfy-house
    -  https://github.com/ClownleeCodes/ComfyHouse-VanillaJs
    -  https://github.com/john-smilga/js-comfy-house-parcel-setup
    -  https://github.com/john-smilga/js-comfy-house-furniture-store


## Stripe

- Go to stripe.com
- create an account
- verify your email
- go to stripe > Developers > API keys > Publishable key > copy it into .env
- https://dashboard.stripe.com/test/apikeys
- Stripe default credit card number = 4242 4242 4242 4242 04/24 242 42242

## Commerce Payment method(s)

go to commerce adding payment method: Settings > Payment Gateways
- https://dashboard.chec.io/settings/payment

Enter your credit card information in order for commerce.js to be able to connect to stripe 
- don't worry we will create a mock checkout process to complete transaction without taking money from credit card

Then following methods are available:
- stripe - 3% per transaction - + Stripe processing fees
- Manual Payments - e.g. Cash on delivery, bank deposit - 3% per transaction
- Square - 3% per transaction - + Square processing fees
- Paypal - 3% per transaction - + PayPal processing fees
- DWOLLA - 3% per transaction
- Razorpay - 3% per transaction - + razorpay processing fees

Enable Stripe
- Here in this app only stripe web element is added inside PaymentForm.jsx using stripe sdk
- copy stripe keys (public and secret keys) into chec.io dashboard getting it from https://dashboard.stripe.com/test/apikeys

How to enable paypal:
- From above https://dashboard.chec.io/settings/payment, enable paypal
- https://commercejs.com/docs/guides/paypal-integration#example-implementation


## Drawer Navbar todo.txt

- https://material-ui.com/components/drawers/
- https://codesandbox.io/s/deopk?file=/demo.js:910-915
- https://medium.com/@tsubasakondo_36683/create-responsive-drawer-menu-with-react-material-ui-617a42764b69


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
