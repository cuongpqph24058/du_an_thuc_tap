import { useNavigate } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";

import HeartButton from "../HeartButton";

import { IFavoriteUser, IProduct } from "../../../../interface";

type ProductCardProps = {
  product: IProduct;
  favoriteUser: IFavoriteUser[] | undefined;
};

const ProductCard = ({ product, favoriteUser }: ProductCardProps) => {
  const navigate = useNavigate();

  const discount = Math.round(
    ((product.original_price - product.price) / product.original_price) * 100
  );

  return (
    <>
      <div className="col-span-1 cursor-pointer group rounded-xl p-3 border hover:scale-110">
        <div className="flex flex-col justify-end gap-3 w-full">
          <div className="flex flex-row justify-between">
            {discount > 0 && (
              <div className="relative mt-[-15px] ml-[-15px]"></div>
            )}

            <div className="w-auto">
              <HeartButton
                productId={product._id}
                favoriteUser={favoriteUser}
              />
            </div>
          </div>

          <div className="aspect-square w-full relative overflow-hidden">
            <img
              alt="Product"
              src={product?.images[0].url}
              onClick={() => navigate(`/product-detail/${product._id}`)}
              className="object-cover h-full w-full transition"
            />
          </div>
          <div className="flex justify-between">
            <div className="truncate">
              <span className="font-normal text-xs break-all">
                {product.name}
              </span>
            </div>
            <div className="flex flex-row gap-2 items-center
">
              <div className="font-bold text-base text-[#ff424e]">
                {product.price.toLocaleString("vi-VN")}₫
              </div>

              {product.price !== product.original_price && (
                <del className="font-medium text-sm text-gray-500">
                  {product.original_price.toLocaleString("vi-VN")}₫
                </del>
              )}
            </div>
          </div>
          <div className="flex items-center"></div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
