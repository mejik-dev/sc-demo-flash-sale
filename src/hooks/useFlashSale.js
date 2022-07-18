import { gql, useQuery } from "@apollo/client";

export const useFlashSale = () => {
  const GET_FLASH_SALE = gql`
    {
      cache(key: "flash-sale") {
        name
        key
        expired
        createdAt
        data
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_FLASH_SALE);

  const products = data?.cache?.data?.products;

  return { GET_FLASH_SALE, loading, error, products };
};
