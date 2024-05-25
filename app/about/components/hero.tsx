import React from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import heroimage from "../assets/hero.jpg";

export default function hero() {
  return (
    <div className='py-40 flex font-bold items-center'>
      <div className='container'>
        <h1 className='font-bold text-4xl lg:text-6xl'>hero</h1>
        <p className='text-muted-foreground mb-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et at recusandae quasi fuga, voluptate quo laboriosam odit? Quam, voluptate debitis sit, nisi quae, quibusdam architecto facilis soluta placeat voluptas est?
        </p>
        {/* <Image src={heroimage} alt="heroimage"/> */}
        <Button>お問い合わせ</Button>
      </div>
    </div>
  )
}
