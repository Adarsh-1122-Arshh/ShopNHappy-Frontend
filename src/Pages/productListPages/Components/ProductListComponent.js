import React, { useEffect, useState } from "react";
import BazaarLayout from "../../BazaarLayout";
import { Card, CardContent, Grid } from "@mui/material";
import ImageComponent from "../../../Common/Component/ImageComponent";
import LabelComponent from "../../../Common/Component/LabelComponent";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from 'react-router-dom';
import { ButtonComponent } from "../../../Common/Component/ButoonComponent";
import { productListActionBinder } from "../Actions/PLActionBinder";
import { AppBarComponent } from "../../../Common/Component/AppBar";
import InfiniteScroll from "react-infinite-scroll-component";


const ProductListComponent = (props) => {
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(-1);
  const [hasMore, setHasMore] = useState(true)
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const dispatch = useDispatch();
  useEffect(() => {
    setSkip(0)
    dispatch(productListActionBinder(category))
  }, []);

  const productListData = useSelector((state) => {
         return state.ProductListData;
  });

  const fetchMoreData = () => {
    setSkip(limit + skip)
  }

  useEffect(() => {
    if (skip != -1) {
      dispatch(productListActionBinder(category, limit, skip))
    }
  }, [skip])

console.log("IN PRoducrLIstPage", productListData);
// const [pageProducts, setPageProducts] = useState([
//   {
//   productImage: "https://m.media-amazon.com/images/I/61jBLw5Bq9L._SL1400_.jpg",
//   productName: "The Power of Your Subconscious Mind",
//   price: "999"
// },
// {
//   productImage: "https://m.media-amazon.com/images/I/41mxvU9Tu6L._SY445_SX342_.jpg",
//   productName: "The Psychology of Money",
//   price: "2222"
// },
// {
//   productImage: "https://m.media-amazon.com/images/I/41zjvrP087L._SX300_SY300_QL70_FMwebp_.jpg",
//   productName: "Noise Buds X Prime",
//   price: "999"
// },
// {
//   productImage: "https://m.media-amazon.com/images/I/41JrUCWNjHL._SY445_SX342_QL70_FMwebp_.jpg",
//   productName: "Apple iPhone 15 Pro Max (256 GB) - White",
//   price: "120000"
// },
// {
//   productImage: "https://m.media-amazon.com/images/I/61jBLw5Bq9L._SL1400_.jpg",
//   productName: "Boult EarBus",
//   price: "999"
// },
// {
//   productImage: "https://m.media-amazon.com/images/I/61oNqtrECLL._SL1500_.jpg",
//   productName: "OnePlus Nord Buds 2 TWS",
//   price: "3000"
// },
// {
//   productImage: "https://m.media-amazon.com/images/I/91v9yAPw3-L._AC_UL480_FMwebp_QL65_.jpg",
//   productName: "Apple Watch Ultra [GPS + Cellular 49 mm] smart w",
//   price: "90000"
// },
// {
//   productImage: "https://m.media-amazon.com/images/I/812v525aLdL._AC_UY327_FMwebp_QL65_.jpg",
//   productName: "Kodak 80 cm (32 inches)",
//   price: "4999"
// },
// {
//   productImage: "https://m.media-amazon.com/images/I/61jBLw5Bq9L._SL1400_.jpg",
//   productName: "The Power of Your Subconscious Mind",
//   price: "999"
// }, {
//   productImage: "https://m.media-amazon.com/images/I/61jBLw5Bq9L._SL1400_.jpg",
//   productName: "The Power of Your Subconscious Mind",
//   price: "999"
// },
// {
//   productImage: "https://m.media-amazon.com/images/I/61jBLw5Bq9L._SL1400_.jpg",
//   productName: "The Power of Your Subconscious Mind",
//   price: "999"
// },
// {
//   productImage: "https://m.media-amazon.com/images/I/61jBLw5Bq9L._SL1400_.jpg",
//   productName: "The Power of Your Subconscious Mind",
//   price: "999"
// },
// {
//   productImage: "https://m.media-amazon.com/images/I/61jBLw5Bq9L._SL1400_.jpg",
//   productName: "The Power of Your Subconscious Mind",
//   price: "999"
// }
// ]);

return (
  <div>
    <AppBarComponent />
  
    <InfiniteScroll
      dataLength={productListData.products.length}
      next={fetchMoreData}
      // style={{ display: 'flex', flexDirection: 'column-reverse' }}
      hasMore={true}
      loader={<h4>Loading your content...</h4>}
  
    >
      <Grid container spacing={2}>
        {
          productListData.products.map((product, index3) => {
            return (
              <Grid item key={`index_${index3}`} lg={4}>
                <Card>
                  <CardContent>
                    <ImageComponent imagePath={product.images[0]} />
                    <LabelComponent labelText={product.title} />
                    <LabelComponent labelText={product.rating} />
                    <LabelComponent labelText={product.returnPolicy} />
                    <LabelComponent labelText={product.price} />
                    <ButtonComponent buttonVariant={'contained'}
                      buttonName={'click here'}
                      color={'success'} />
                  </CardContent>
                </Card>
              </Grid>
            )
          })
        }
      </Grid>
    </InfiniteScroll>
  </div>
)
}
export default ProductListComponent;