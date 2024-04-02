import { Schema, Document, model } from 'mongoose';

interface PaymentProcess extends Document {
    id_customer_payment: Schema.Types.ObjectId;
    product_name: string;
    payment_id_checkout: string;
    process_name: 'inclusão' | 'remoção' | 'bloqueio';
    steps: string[];
    payment_status_during_process: string;
    created_at?: Date;
}

const paymentProcessSchema = new Schema<PaymentProcess>(
    {
        id_customer_payment: { type: Schema.Types.ObjectId, required: true },
        product_name: { type: String, required: true },
        payment_id_checkout: { type: String, required: true },
        process_name: { type: String, enum: ['inclusão', 'remoção', 'bloqueio'], required: true },
        steps: [{ type: String, required: true }],
        payment_status_during_process: { type: String, required: true },
        created_at: { type: Date, default: null }
    },
    {
        collection: 'customer_payment_process_in_circle'
    }
);

const customerPaymentProcessInCircleDAL = model<PaymentProcess>('customer_payment_process_in_circle', paymentProcessSchema);
export default customerPaymentProcessInCircleDAL;