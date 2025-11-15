import Checkout from '@/app/components/Checkout';
import GoBackButton from "../components/GoBackButton"

export const metadata = {
  title: 'Checkout',
};

export default function CheckoutPage() {
  return (
    <main>
        <GoBackButton />
        <Checkout />
    </main>
  );
}
