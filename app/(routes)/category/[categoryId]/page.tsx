import { getCategory } from "@/actions/get-category";
import { getProducts } from "@/actions/get-products";
import { getSizes } from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import NoResults from "@/components/no-results";
import ProductCard from "@/components/product-card";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";

type CategoryPageProps = {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
};

const CategoryPage = async ({
  params: { categoryId },
  searchParams,
}: CategoryPageProps) => {
  const allProducts = await getProducts({
    categoryId,
    sizeId: searchParams.sizeId,
  });
  const sizes = await getSizes();

  const category = await getCategory(categoryId);

  return (
    <Container>
      <Billboard data={category.billboard} />

      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
          <MobileFilters sizes={sizes} />
          <div className="hidden lg:block">
            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            {allProducts.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {allProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CategoryPage;
