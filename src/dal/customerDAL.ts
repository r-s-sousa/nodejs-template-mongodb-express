import { Schema, Document, model } from 'mongoose';

interface Customer extends Document {
    email: string;
    custumer_id_checkout: string;
    name: string;
    document: string;
    address: string;
    deleted_at?: Date;
    created_at: Date;
}

const customerSchema = new Schema<Customer>(
    {
        email: { type: String, required: true, unique: true },
        custumer_id_checkout: { type: String, required: true },
        name: { type: String, required: true },
        document: { type: String, required: true },
        address: { type: String, required: true },
        deleted_at: { type: Date, default: null },
        created_at: { type: Date, required: true }
    },
    {
        collection: 'customer'
    }
);

const customerDAL = model<Customer>('customer', customerSchema);
export default customerDAL;