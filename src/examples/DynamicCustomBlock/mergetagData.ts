export const fetchProducts = async (params: { productIds: string[] }) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const images = [
    "https://res.cloudinary.com/djnkpbshx/image/upload/v1688116393/easy-email-pro/jwfkjrlq8izkekcx7ad9.png",
    "https://res.cloudinary.com/djnkpbshx/image/upload/v1688116371/easy-email-pro/as41p2ahhff377y8c9s8.png",
    "https://res.cloudinary.com/djnkpbshx/image/upload/v1688116331/easy-email-pro/mrzhiom54uhmxu5fqfs8.png",
    "https://res.cloudinary.com/djnkpbshx/image/upload/v1688116393/easy-email-pro/jwfkjrlq8izkekcx7ad9.png",
    "https://res.cloudinary.com/djnkpbshx/image/upload/v1688116371/easy-email-pro/as41p2ahhff377y8c9s8.png",
    "https://res.cloudinary.com/djnkpbshx/image/upload/v1688116331/easy-email-pro/mrzhiom54uhmxu5fqfs8.png",
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
