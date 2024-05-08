import { Box, Heading, VStack, Text } from '@chakra-ui/react'
import React from 'react';
import {useSearchParams} from "react-router-dom";


const PaymentSuccess = () => {
    const searchQuery = useSearchParams()[0];
    const referencenum = searchQuery.get("reference")

    return (
        <Box>
            <VStack h = "100vh" justifyContent={"center"} alignItems={"center"}>
                <Heading textTransform={"uppercase"}>
                    Payment Successful
                </Heading>
                <Text>
                        Your transaction has been processed successfully.
                        Reference No. {referencenum}
                </Text>
            </VStack>
        </Box>
    )
}

export default PaymentSuccess
