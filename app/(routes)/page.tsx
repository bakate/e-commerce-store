import { getBillboardById } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboardById("64f35a96ff7189d58e026534");

  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" products={products} />
          </div>
        </div>
      </Container>
    </Suspense>
  );
}
