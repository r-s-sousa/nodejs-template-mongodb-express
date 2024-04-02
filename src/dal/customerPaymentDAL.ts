import { Schema, Document, model } from 'mongoose';

interface Payment extends Document {
    id_customer: Schema.Types.ObjectId;
    payment_status: 'pending' | 'approved' | 'rejected' | 'cancellate';
    payment_json_data: string;
    payment_amount: number;
    product_name: string;
    payment_id_checkout: string;
    created_at?: Date;
    updated_at: Date;
}

const paymentSchema = new Schema<Payment>(
    {
        id_customer: { type: Schema.Types.ObjectId, required: true },
        payment_status: { type: String, enum: ['pending', 'approved', 'rejected', 'cancellate'], required: true },
        payment_json_data: { type: String, required: true },
        payment_amount: { type: Number, required: true },
        product_name: { type: String, required: true },
        payment_id_checkout: { type: String, required: true },
        created_at: { type: Date, default: null },
        updated_at: { type: Date, default: Date.now }
    },
    {
        collection: 'customer_payment'
    }
);

const customerPaymentDAL = model<Payment>('customer_payment', paymentSchema);
export default customerPaymentDAL;