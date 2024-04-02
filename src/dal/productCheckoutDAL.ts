import { Schema, Document, model } from "mongoose";

type TagObject = {
    name: string,
    id: number
}

interface ProductCheckout extends Document {
    name: string,
    tags: TagObject
}

const productCheckoutSchema = new Schema<ProductCheckout>(
    {
        name: { type: String },
        tags: [{ type: { name: String, id: Number } }]
    },
    {
        collection: 'product_checkout'
    }
);

const productCheckoutDAL = model<ProductCheckout>('product_checkout', productCheckoutSchema);
export default productCheckoutDAL;