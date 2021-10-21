import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react"
import { Formik, Form, Field } from "formik"
import { navigate } from "gatsby"
import React from "react"
import { useSelector } from "react-redux"

const getBasket = (cartObject, deets) => {
  let basket = []

  cartObject.forEach(item => {
    basket.push(item.title)
  })

  return `Order Name: ${deets.orderName} - Delivery Address: ${
    deets.shippingAddress
  } - Products: ${basket.toString()}
      `
}
export default function CheckoutForm() {
  const cart = useSelector((state: any) => state.shop.cart)
  function validateName(value) {
    let error
    if (!value) {
      error = "Field is required"
    }
    return error
  }

  return (
    <Formik
      initialValues={{ orderName: "", shippingAddress: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          const order = getBasket(cart, values)
          navigate(`https://wa.me/+2348091294278?text={${order}}`)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {props => (
        <Form>
          <Field name="orderName" validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel
                  fontSize="sm"
                  fontWeight="600"
                  color={useColorModeValue("gray.700", "gray.50")}
                  htmlFor="orderName"
                  my={2}
                >
                  Your Name
                </FormLabel>
                <Input
                  {...field}
                  type="text"
                  placeholder="Name"
                  focusBorderColor="brand.400"
                  rounded="md"
                  w="full"
                />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="shippingAddress" validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel
                  fontSize="sm"
                  fontWeight="600"
                  color={useColorModeValue("gray.700", "gray.50")}
                  htmlFor="shippingAddress"
                  my={2}
                >
                  Shipping Address
                </FormLabel>

                <Textarea
                  {...field}
                  mt={1}
                  rows={3}
                  shadow="sm"
                  focusBorderColor="brand.400"
                  fontSize={{ sm: "sm" }}
                  placeholder="Your Shipping Address"
                />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Place Order
          </Button>
        </Form>
      )}
    </Formik>
  )
}
