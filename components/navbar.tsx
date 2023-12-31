import Link from "next/link";

import { getBillboardById } from "@/actions/get-billboard";
import { getCategories } from "@/actions/get-categories";
import MainNav from "@/components/main-nav";
import NavBarActions from "@/components/navbar-actions";
import Container from "@/components/ui/container";

const NavBar = async () => {
  const categories = await getCategories();
  const currentBillboardId = `${process.env.NEXT_PUBLIC_BILLBOARD_ID}`;
  const {
    store: { name = "" },
  } = await getBillboardById(currentBillboardId);

  return (
    <div className="border-b">
      <Container>
        <div className="relative lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl uppercase">{name}</p>
          </Link>
          <MainNav data={categories} />
          <NavBarActions />
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
