import SetHead from "../components/head/index";
import Footer from "../components/footer/index";
import Product from "../components/Product/index";

const DUMMY_MEETUPS = [
  {
    product_id: 1,
    product_name: "LISA PHOTOBOOK [0327] -LIMITED EDITION-",
    image_path: "https://f.btwcdn.com/store-47463/product-thumb/7a24766d-26da-6e6b-d7e9-60096f91ede5.jpg",
    price: 950,
  },
  {
    product_id: 2,
    product_name: "LISA PHOTOBOOK [0327] VOL.2 -SECOND EDITION-",
    image_path: "https://f.btwcdn.com/store-47463/product/a29da190-8665-e246-6419-6051d52fd8da.jpg",
    price: 1050,
  },
  {
    product_id: 3,
    product_name: "Rosé First Single Album - R - Kit Album",
    image_path: "https://f.btwcdn.com/store-47463/product/cbc1c49c-0201-1b53-84cd-6060085a24ff.jpg",
    price: 750.00,
  },
  {
    product_id: 4,

    product_name: "ROSÉ PHOTO CARD + STICKER SET",
    image_path: "https://f.btwcdn.com/store-47463/product/87b92aad-0114-7e8a-d087-60793cf8ab3b.jpg",
    price: 350,
  },
  {
    product_id: 5,

    product_name: "Dynamite CD",
    image_path:"https://d2j6dbq0eux0bg.cloudfront.net/images/54564059/2238263815.jpg",
    price: 950,
  },
  {
    product_id: 6,

    product_name: "BTS MAP of THE SOUL: 7",
    image_path:"https://dudeplace.co/wp-content/uploads/2020/02/q6313uiq8dgka57zhi5-o147660484123982849.jpg",
    price: 1400,
  },
  {
    product_id: 7,

    product_name: "BTS - Love Yourself Tear",
    image_path: "https://th-test-11.slatic.net/p/65eb2c21c7e2b3ecc0070dcf062aeb93.jpg",

    price: 1180,
  },
  {
    product_id: 8,

    product_name: "BTS - BE (Essential Edition)",
    image_path: "https://l.lnwfile.com/ep9dgx.jpg",
    price: 1230,
  },
  {
    product_id: 9,

    product_name: "Baby BT21 Boucle Slippers",
    image_path:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/54564059/2158327079.jpg",
    price: 745,
  },
  {
    product_id: 10,
    product_name: "BT21 'A Dream of Baby'",
    image_path:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/54564059/2142084113.jpg",
    price: 2170,
  },
];

export default function Home(props) {
  const { data } = props;
  return (
    <>
      <SetHead />
      <Product data={data} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      data: DUMMY_MEETUPS,
    },
  };
}
