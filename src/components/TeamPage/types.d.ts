import { Maybe, Mdx, MdxFields, MdxFrontmatter } from "../../global"

export type Employes = Array<{
  node: Pick<Mdx, "excerpt"> & {
    fields?: Maybe<Pick<MdxFields, "slug">>
    frontmatter?: Maybe<Pick<MdxFrontmatter, "date" | "name" | "job" | "image">>
  }
}>
