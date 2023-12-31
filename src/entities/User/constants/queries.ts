import { UsersParams } from "../api";

const defaultQuery = ['users'];

const usersList = (params: UsersParams) => [
  ...defaultQuery, 
  'list', 
  params.q, 
  params.order, 
  params.page, 
  params.sort, 
  params.per_page,
]

const userById = (id: number) => [
  ...defaultQuery,
  id,
]

export { usersList, userById }