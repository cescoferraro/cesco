import { Maybe, MdxFrontmatter } from "../../global"

export type Portifolio = { slug: string } & Maybe<
  Pick<MdxFrontmatter, "date" | "title" | "description" | "categorie">
>
