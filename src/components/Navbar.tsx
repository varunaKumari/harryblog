import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { ModeToggle } from "./theme-btn";
  


const Navbar = () => {
    return (
<nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
<div className="container mx-auto flex justify-between items-center">
<Link href={"/"} >
    <div className="text-lg font-bold">
        HarryBlog
    </div></Link>

<div className="hidden md:flex space-x-4 items-center">
  <Link href="/" className="hover:font-semibold hover:underline transition duration-300">Home</Link>
  <Link href="/about" className="hover:font-semibold hover:underline transition duration-300">About</Link>
  <Link href="/blog" className="hover:font-semibold hover:underline transition duration-300">Blog</Link>
  <Link href="/contact" className="hover:font-semibold hover:underline transition duration-300">Contact</Link>
  <div className="flex items-center">
    <Button className="mx-1 hover:bg-gray-300 hover:text-white transition duration-300" variant="outline">login</Button>
    <Button className="mx-1 hover:bg-gray-300 hover:text-white transition duration-300" variant="outline">Signup</Button>
    <ModeToggle/>
  </div>
</div>
<div className="md:hidden">
    <span className="mx-2">
        <ModeToggle/>
    </span>
<Sheet>
<SheetTrigger>   

    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="rounded" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M412h16m-7 6h7"></path>
    </svg>

</SheetTrigger>
<SheetContent>
    <SheetHeader>
      <SheetTitle className="font-bold my-4">HarryBlog</SheetTitle>
      <SheetDescription>
      <div className="flex flex-col gap-6">
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/blog">Blog</Link>
<Link href="/contact">Contact</Link>
<div>
<Button className="mx-1 text-xs" variant="outline">login</Button>
<Button className="mx-1 text-xs" variant="outline">Signup</Button>

</div>
</div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>
</div>



</nav>
    );
};

export default Navbar






