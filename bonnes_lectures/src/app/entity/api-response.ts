import { Book } from "./book";

export interface ApiResponse {
    "@context" : string,
  "@id" : string,
  "@type" : string,
  "member": Array<Book>
}
