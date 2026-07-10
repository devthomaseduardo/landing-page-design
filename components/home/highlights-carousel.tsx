"use client"

import {
  useCallback,
  useRef,
  useState,
} from "react"

import Image from "next/image"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { PROJECTS } from "@/lib/data"


export function HighlightsCarousel() {

  const trackRef = useRef<HTMLDivElement>(null)

  const [index,setIndex] = useState(0)



  const move = useCallback((direction:number)=>{

    const track = trackRef.current

    if(!track) return


    const card =
      track.children[
        index + direction
      ] as HTMLElement


    if(card){

      track.scrollTo({
        left: card.offsetLeft,
        behavior:"smooth"
      })

      setIndex(index + direction)

    }


  },[index])



  return (

<section>

<div className="
mx-auto
max-w-6xl
px-5
py-20
">


<div className="
flex
items-end
justify-between
">


<SectionHeading
kicker="Selected Work"
title="Projetos selecionados"
/>



<div className="flex gap-2">


<button
disabled={index===0}
onClick={()=>move(-1)}
className="
size-11
rounded-full
border
border-border
disabled:opacity-30
"
>

<ArrowLeft className="mx-auto size-4"/>

</button>


<button
disabled={index===PROJECTS.slice(0, 3).length-1}
onClick={()=>move(1)}
className="
size-11
rounded-full
border
border-border
disabled:opacity-30
"
>

<ArrowRight className="mx-auto size-4"/>

</button>


</div>


</div>





<div
ref={trackRef}
className="
mt-12
flex
gap-6
overflow-x-auto
snap-x
snap-mandatory
scroll-smooth
[scrollbar-width:none]
[&::-webkit-scrollbar]:hidden
"
>


{PROJECTS.slice(0, 3).map((project,i)=>(


<article
key={project.title}
className="
group
relative
aspect-[4/5]
w-[85%]
shrink-0
snap-start
overflow-hidden
rounded-3xl
sm:w-[45%]
lg:w-[32%]
"
>


<Image

src={project.image}

alt={project.title}

fill

className="
object-cover
transition-transform
duration-700
group-hover:scale-105
"

/>



<div
className="
absolute
inset-0
bg-gradient-to-t
from-black/80
via-transparent
"
/>





<div
className="
absolute
left-6
top-6
font-mono
text-xs
text-white/70
"
>

{String(i+1).padStart(2,"0")}

</div>






<div
className="
absolute
inset-x-6
bottom-6
"
>


<h3
className="
text-2xl
font-semibold
text-white
"
>

{project.title}

</h3>



<p
className="
mt-1
text-sm
text-white/70
"
>

{project.tag}

</p>



<div
className="
mt-5
translate-y-4
opacity-0
transition-all
duration-500
group-hover:translate-y-0
group-hover:opacity-100
"
>


<p
className="
text-sm
leading-relaxed
text-white/80
"
>

{project.description}

</p>



<p
className="
mt-3
font-mono
text-[11px]
uppercase
tracking-widest
text-primary
"
>

{project.stack.join(" · ")}

</p>


{project.href && (

<a
href={project.href}
target="_blank"
className="
mt-5
inline-flex
items-center
gap-2
text-sm
text-white
"
>

Ver projeto

<ArrowUpRight className="size-4"/>

</a>

)}



</div>


</div>


</article>


))}


</div>



</div>

</section>

  )

}