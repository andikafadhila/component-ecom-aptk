import { Box } from "@chakra-ui/react";
import { useMediaQuery, Center } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const ProductCard = (variant) => {
  const Product = {
    imageUrl:
      "https://images.tokopedia.net/img/cache/700/product-1/2020/7/1/5372526/5372526_424be0d8-ece4-43db-83f5-62b0fd2036dd_1080_1080.jpg",
    imageAlt: "PANADOL 10 KAPLET HEHEHEHE",
    title: "PANADOL 10 KAPLET HEHEHEHE",
    discount: "17",
    formattedPrice: "Rp.35.000",
    unit: "strip",
  };

  const [xl] = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      {xl ? (
        <Box
          w="194px"
          h="331px"
          border="1px"
          rounded="2xl"
          boxShadow="lg"
          className="relative"
          display="flex"
          flexDirection="column"
        >
          {/* image */}
          <img
            src={Product.imageUrl}
            alt={Product.imageAlt}
            className="w-[114px] mx-auto mt-4"
          />
          {/* like button */}
          <div className="absolute top-4 right-4">
            <div className="flex justify-center w-[44px] h-[44px] rounded-full shadow-gray-100 bg-white shadow-md hover:cursor-pointer">
              <FaHeart className="text-gray-300 mt-4" />
            </div>
          </div>

          {/* Title */}
          <div>
            <p className="font-sans text-[12px] text-orangeSecondaryDarker">
              {Product.title}
            </p>
          </div>
          {/* Discount */}
          {/* Original Price */}
          {/* Price/unit */}
          {/* Button */}
        </Box>
      ) : (
        <Box w="121px" h="253px" border="1px" rounded="2xl">
          <img
            src={Product.imageUrl}
            alt={Product.imageAlt}
            className="w-[114px] mx-auto"
          />
        </Box>
      )}
    </>
  );
};

export default ProductCard;
