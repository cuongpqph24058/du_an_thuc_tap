import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import {
  Button,
  CartDrawn,
  Footer,
  Input,
  Modal,
  NavBar,
} from "../../components";

import { ICategoryProduct, IUser } from "../../interface";

type BaseClientProps = {
  currentUser: IUser | null;
  listCategories: ICategoryProduct[] | undefined;
};

const BaseClient = ({ currentUser, listCategories }: BaseClientProps) => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [openDrawn, setOpenDrawn] = useState(false);

  const setDrawn = () => {
    setOpenDrawn(!openDrawn);
  };

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);

    setOpenDrawn(false);
  }, [location.pathname]);

  const bodyModal = (
    <>
      <div className="">

      </div>
    </>
  );

  return (
    <>
      <div className="bg-zinc-200 bg-cover bg-fixed bg-center bg-no-repeat">
        

        <NavBar
          onOpen={setDrawn}
          listCategories={listCategories}
          currentUser={currentUser}
        />

        <CartDrawn
          isOpen={openDrawn}
          currentUser={currentUser}
          onClose={setDrawn}
        />

        <main className="pt-36">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BaseClient;
