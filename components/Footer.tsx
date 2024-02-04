import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-gray-900 w-full px-10 py-20 h-[120px] flex space-x-20 items-center">
        <Link href="/">
          <Image
            src="https://links.papareact.com/a943ae"
            alt="Disney Logo"
            width={120}
            height={100}
            className="cursor-pointer invert-0 dark:invert"
          />
        </Link>

        <div className="mt-10 flex w-full space-x-8 justify-around">
          <div>
            <h2 className="font-bold text-xl mb-3">Contact:</h2>
            <Link href={"#"}>bahridnurullav@gmail.com</Link>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-3">Phone:</h2>
            <Link href={"#"}>+998977116812</Link>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-3">Address:</h2>
            <Link href={"#"}>Tashkent Olmazor str. Apt: 116</Link>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-3">Careers:</h2>
            <Link href={"#"}>Not availible.</Link>
          </div>
        </div>
      </div>
      <div className="w-full text-center p-5">
        All Rights are reserved. 2024
      </div>
    </>
  );
}

export default Footer;
