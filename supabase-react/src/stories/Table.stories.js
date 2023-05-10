import { Table } from '../components/Table';


const singleItem =   {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
}

const tableData = Array.from({length: 10}, () => singleItem)


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
};

export const tableItem = {
  args: {
    data: tableData,
    dataHeaders: [
      {field: "id", header: "Id"}, 
      {field: "code", header: "Code"},
      {field: "price", header: "Price"}, 
    ]
  }, 
};

export const imageItem = {
  args: {
    data: tableData,
    dataHeaders: [
      {field: "id", header: "Id"},
      {type: "image", field: "image", header: "Image"}, 
      {field: "code", header: "Code"},
      {field: "price", header: "Price"}, 
    ]
  }, 
};