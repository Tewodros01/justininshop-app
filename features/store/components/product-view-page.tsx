import { fakeProducts, Product } from "@/constants/mock-api";
import { notFound } from "next/navigation";
import ProductForm from "./product-form";

type TProductViewPageProps = {
  storeId: string;
};

export default async function ProductViewPage({
  storeId,
}: TProductViewPageProps) {
  let product = null;
  let pageTitle = "Create New Product";

  if (storeId !== "new") {
    const data = await fakeProducts.getProductById(Number(storeId));
    product = data.product as Product;
    if (!product) {
      notFound();
    }
    pageTitle = `Edit Product`;
  }

  return <ProductForm initialData={product} pageTitle={pageTitle} />;
}
