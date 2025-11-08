export type Branch = {
  id: number;
  name: string;
  address: string;
  contact?: string;
  pastor_img: string;
  pastor?: string;
}

export type BranchData = {
  [key: string]: Branch[];
};