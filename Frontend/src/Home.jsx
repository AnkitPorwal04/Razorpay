import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./card";
import axios from "axios";

const Home = () => {
  const checkoutHandler = async (amount) => {

    const {data: {key}} = await axios.get("http://localhost:4000/api/getkey")

    const { data:{order} } = await axios.post("http://localhost:4000/api/checkout", {
      amount
    })

    const options = {
      key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Ankit corp", //your business name
      description: "Test Transaction Razorpay",
      image: "https://avatars.githubusercontent.com/u/96345105?v=4",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          name: "Gaurav Kumar", //your customer's name
          email: "gaurav.kumar@example.com",
          contact: "9000090000" //Provide the customer's phone number for better conversion rates 
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          "color": "#52194e"
      }
  };
  const razor = new window.Razorpay(options);
      razor.open();
  }

  return (
    <Box>
      <Stack
        h={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={["Column", "row"]}
      >
        <Card
          amount={5000}
          img={
            "https://www.maplestore.in/cdn/shop/files/r1587_Space_Grey_PDP_Image_Position-1__en-IN_23181987-b092-40a0-b81f-0a135b9b0b9d_4000x.jpg"
          }
          checkoutHandler={checkoutHandler}
        />
        <Card
          amount={3000}
          img={
            "https://i.pinimg.com/originals/cc/74/9e/cc749ededc077309f29421d3cb727927.png"
          }
          checkoutHandler={checkoutHandler}
        />
      </Stack>
    </Box>
  );
};

export default Home;
