
import { TOC } from "@/lib/blogs/renderer"
import { cn } from "@/lib/utils"

interface TreeProps {
    tree: TOC
    activeItem?: string | null
  }
  
  export function Tree({ tree, activeItem }: TreeProps) {
    return tree.length ? (
      <ul className={cn("m-0 list-none")}>
        {tree.map((item, index) => {
          return (
            <li key={index} className={cn("mt-0 pt-2")} style={{paddingLeft: item.level * 10}}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "inline-block no-underline",
                  item.id === `${activeItem}`
                    ? "text-primary font-bold"
                    : "text-foreground/80 "
                )}
              >
                {item.text}
              </a>
            
            </li>
          )
        })}
      </ul>
    ) : null
  }