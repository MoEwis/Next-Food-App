import React from "react";
import Container from "../container/layout";
import Link from "../link";
import { Routes } from "@/constants/enums";
import Navbar from "./navbar";

const index = () => {
  return (
    <Container>
      <header className="py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Link
            href={Routes.ROOT}
            className="text-primary font-semibold text-2xl"
          >
            🍕 Pizza
          </Link>
          <Navbar />
        </div>
      </header>
    </Container>
  );
};

export default index;
