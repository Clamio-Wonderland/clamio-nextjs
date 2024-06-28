import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
    title : string;
    className? : string;
};

export default function PageTitle({title,className}: Props) {
  return (
    <h1 className={cn('text-2xl px-5 pt-5 md:px-8 md:pt-5 font-semibold',className)}>

        {title}
    </h1>
  )
}