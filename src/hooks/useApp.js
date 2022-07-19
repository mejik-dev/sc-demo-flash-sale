import { gql, useQuery } from "@apollo/client";

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

export const useApp = () => {
  const { loading, error, data } = useQuery(GET_FLASH_SALE);

  const products = data?.cache?.data?.products;

  return { error, loading, products };
};
