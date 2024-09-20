import React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { BazaarActionBinder } from "../Action/BazaarHomeActionBinder";
import OfferPoductsComponent from "./OfferProductsComponent";
import { AppBarComponent } from "../../../Common/Component/AppBar";
import InfiniteScroll from "react-infinite-scroll-component";

export const BazaarHome = (Props) => {
  //const [promotedProducts, setPromotedProducts] = useState([])
  // const [loginData, setLoginData] = useState();
  // useEffect(() => {
  //   setPromotedProducts([
  //     {
  //       id: "1",
  //       offerProducts: [{
  //         productNO: "01",
  //         productImage: "https://m.media-amazon.com/images/I/819SRH2DKBL._AC_UY327_FMwebp_QL65_.jpg",
  //         ProductName: "Samsung 4k Supported TV ",
  //         ProductPrice: "200000 Rs"
  //       },
  //       {
  //         productNO: "02",
  //         productImage: "https://m.media-amazon.com/images/I/41tjAHS+Z8L._SY300_SX300_.jpg ",
  //         ProductName: "LG Washing-Machine",
  //         ProductPrice: "90000 Rs"
  //       },
  //       {
  //         productNO: "03",
  //         productImage: "https://m.media-amazon.com/images/I/71sK2zqXWsL._SL1500_.jpg ",
  //         ProductName: "Refrigerator with Door-cooling",
  //         ProductPrice: "130000 Rs"
  //       },
  //       {
  //         productNO: "04",
  //         productImage: "https://m.media-amazon.com/images/I/61abiT+5nlL._SL1100_.jpg ",
  //         ProductName: "L Shape Sofa Set ",
  //         ProductPrice: "80000 Rs"
  //       }]
  //     },
  //     {
  //       id: "2",

  //       offerProducts: [{
  //         productNO: "05",
  //         productImage: "https://m.media-amazon.com/images/I/71-D1xCuVwL._SL1500_.jpg",
  //         ProductName: "MacBook pro M3",
  //         ProductPrice: " 300000 Rs"
  //       },
  //       {
  //         productNO: "06",
  //         productImage: "https://m.media-amazon.com/images/I/61VQTLVxvGL._SL1000_.jpg ",
  //         ProductName: "Sony PS-5",
  //         ProductPrice: "90000 Rs"
  //       },
  //       {
  //         productNO: "07",
  //         productImage: "https://m.media-amazon.com/images/I/41O5+uieq8L._AC_UL480_FMwebp_QL65_.jpg",
  //         ProductName: "V-guard WaterPump",
  //         ProductPrice: "30000 Rs"
  //       },
  //       {
  //         productNO: "08",
  //         productImage: "https://m.media-amazon.com/images/I/41tjAHS+Z8L._SY300_SX300_.jpg ",
  //         ProductName: "Vaccume-cleaner",
  //         ProductPrice: "40000 Rs"
  //       }],
  //     },
  //     {
  //       id: "3",
  //       offerProducts: [{
  //         productNO: "01",
  //         productImage: "https://m.media-amazon.com/images/I/819SRH2DKBL._AC_UY327_FMwebp_QL65_.jpg",
  //         ProductName: "Samsung 4k Supported TV ",
  //         ProductPrice: "200000 Rs"
  //       },
  //       {
  //         productNO: "02",
  //         productImage: "https://www.lg.com/content/dam/channel/wcms/in/images/cashback/fhm1065sdw/450x450.jpg ",
  //         ProductName: "LG Washing-Machine",
  //         ProductPrice: "90000 Rs"
  //       },
  //       {
  //         productNO: "03",
  //         productImage: "https://m.media-amazon.com/images/I/71sK2zqXWsL._SL1500_.jpg ",
  //         ProductName: "Refrigerator with Door-cooling",
  //         ProductPrice: "130000 Rs"
  //       },
  //       {
  //         productNO: "04",
  //         productImage: "https://m.media-amazon.com/images/I/61abiT+5nlL._SL1100_.jpg ",
  //         ProductName: "L Shape Sofa Set ",
  //         ProductPrice: "80000 Rs"
  //       }]
  //     },
  //     {
  //       id: "4",

  //       offerProducts: [{
  //         productNO: "05",
  //         productImage: "https://m.media-amazon.com/images/I/71-D1xCuVwL._SL1500_.jpg",
  //         ProductName: "MacBook pro M3",
  //         ProductPrice: " 300000 Rs"
  //       },
  //       {
  //         productNO: "06",
  //         productImage: "https://m.media-amazon.com/images/I/61VQTLVxvGL._SL1000_.jpg ",
  //         ProductName: "Sony PS-5",
  //         ProductPrice: "90000 Rs"
  //       },
  //       {
  //         productNO: "07",
  //         productImage: "https://m.media-amazon.com/images/I/41O5+uieq8L._AC_UL480_FMwebp_QL65_.jpg",
  //         ProductName: "V-guard WaterPump",
  //         ProductPrice: "30000 Rs"
  //       },
  //       {
  //         productNO: "08",
  //         productImage: "https://m.media-amazon.com/images/I/41tjAHS+Z8L._SY300_SX300_.jpg ",
  //         ProductName: "Vaccume-cleaner",
  //         ProductPrice: "40000 Rs"
  //       }],
  //     }
  //   ]
  //   )
  // }
  //  , []);

  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(-1);

  const dispatch = useDispatch();

  const promotedProductData = useSelector((state) => {
    return state.promotedProductsData
  });

  useEffect(() => {
    dispatch(BazaarActionBinder());
  }, []);

  useEffect(() => {
    setSkip(0)
    dispatch(BazaarActionBinder())
  }, []);

  const fetchMoreData = () => {
    setSkip(limit + skip)
  }

  useEffect(() => {
    if (skip != -1) {
      dispatch(BazaarActionBinder(limit, skip))
    }
  }, [skip])

  //console.log("BAZARHOME_PRODUCTS", promotedProductData);
  // const onLogin = (login) => {

  // }
  // console.log("----promotedprooooo", promotedProductData);
  return (
    <div>

      {/* <LoginBazaarComponent onLogin={onLogin}/> */}
      <AppBarComponent />

      <InfiniteScroll
        dataLength={promotedProductData.promotedProducts.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading your content...</h4>}
      >

        <Grid container spacing={2}>
          {

            promotedProductData.promotedProducts.map((promotedProduct, index) => {

              return (
                <Grid item sm={6} xs={12} lg={4} md={6} key={`promotedProduct_${index}`}>
                  <Card>
                    <CardContent>
                      <OfferPoductsComponent promotedProduct={promotedProduct} />
                    </CardContent>
                  </Card>
                </Grid>
              )
            }
            )
          }
        </Grid>
      </InfiniteScroll>

    </div >
  )
}

