export const fetchProducts = async (params: { productIds: string[] }) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const images = [
    "https://res.cloudinary.com/djnkpbshx/image/upload/v1688116393/easy-email-pro/jwfkjrlq8izkekcx7ad9.png",
    "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/llghcrwaextpwo9achp0d_7m3t7pdvklhfdpmejf7l6.png",
    "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/lzqtdy43rd793z26z8vxw_vow_gopf_7n99wx4qmozj.png",
    "https://res.cloudinary.com/djnkpbshx/image/upload/v1688116393/easy-email-pro/jwfkjrlq8izkekcx7ad9.png",
    "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/llghcrwaextpwo9achp0d_7m3t7pdvklhfdpmejf7l6.png",
    "https://cdn.shopify.com/s/files/1/0863/8971/9346/files/lzqtdy43rd793z26z8vxw_vow_gopf_7n99wx4qmozj.png",
  ];
  const list = params.productIds.map((id, index) => {
    return {
      id: id.toString(),
      title: `Product #${id}`,
      price: "$" + (+id + 10 * (index + 50)).toString(),
      comparePrice: "$" + (+id + 10 * (index + 50) + 50).toString(),
      image: images[+id % 10],
    };
  });
  return list;
};
