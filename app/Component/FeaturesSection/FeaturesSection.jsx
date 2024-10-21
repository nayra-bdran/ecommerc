import ItemFeatures from "./ItemFeatures";
import customer from "../../../assets/customer-support.png";
import Groupp from "../../../assets/Groupp.png";
import shipping from "../../../assets/shipping.png";
import guarantee from "../../../assets/guarantee.png";
export default function FeaturesSection() {
  return (
    <div className="bg-[#FAF3EA] py-24 mt-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Feature 1 */}
        <ItemFeatures
          tittel="High Quality"
          suptittel="crafted from top materials"
          img={Groupp}
        />
        {/* Feature 2 */}
        <ItemFeatures
          tittel="Warranty Protection"
          suptittel="Over 2 years"
          img={guarantee}
        />
        {/* Feature 3 */}
        <ItemFeatures
          tittel=" 1 / 2 Freee Shipping"
          suptittel="Order over 150 $"
          img={shipping}
        />
        {/* Feature 4 */}
        <ItemFeatures
          tittel="24 / 7 Support Free"
          suptittel="Dedicated support"
          img={customer}
        />
      </div>
    </div>
  );
}
