import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';

export default function Payment() {
    const { cart } = useSelector((state) => state);
    const amount = cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-8">Payment Portal (Sandbox Mode)</h1>
            <PayPalScriptProvider options={{ "client-id": "AQ55bFfa_M-hYun387dVrTvUB1gfkQUrOnAOSJLHAP4NkQzwFb0riyQNwcGgOc4rhQ62LiVYxpIb5SdY", currency: "USD" }}>
                <div className="w-full flex justify-center">
                    <PayPalButtons
                        style={{ layout: 'vertical' }}
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [{
                                    amount: { value: amount }
                                }]
                            });
                        }}
                        onApprove={(data, actions) => {
                            return actions.order.capture().then((details) => {
                                alert(`Payment completed by ${details.payer.name.given_name}`);
                            });
                        }}
                        onError={(err) => {
                            console.error("PayPal Checkout Error:", err);
                            alert("An error occurred with the payment process.");
                        }}
                    />
                </div>
            </PayPalScriptProvider>
        </div>
    );
}
