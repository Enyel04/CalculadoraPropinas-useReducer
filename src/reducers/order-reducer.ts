import { MenuItem } from "../types";

export type orderAction=
  {type: "add-item", payload:{item:MenuItem}} |
  {type: "remove-item", payload:{item:MenuItem['id']}} 