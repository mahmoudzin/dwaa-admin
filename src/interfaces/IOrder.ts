export interface IOrder {
    buyerEmail: any
    orederDate: string
    status: number
    shippingAddress: ShippingAddress
    deliveryMethod: DeliveryMethod
    orederItems: OrederItem[]
    subTotal: number
    paymentIntentId: any
    id: number
    isDeleted: boolean
  }
  
  export interface ShippingAddress {
    firstName: string
    lastName: string
    country: string
    city: string
    street: string
  }
  
  export interface DeliveryMethod {
    shortName: string
    cost: number
    description: string
    deliveryTime: string
    id: number
    isDeleted: boolean
  }
  
  export interface OrederItem {
    product: Product
    price: number
    quantity: number
    id: number
    isDeleted: boolean
  }
  
  export interface Product {
    productId: number
    productName: string
    imgUrl: string
  }